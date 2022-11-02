import React, { useCallback } from 'react';
import { Platform, SafeAreaView, ScrollView } from 'react-native';
import { ListIntrest } from './list-intrest';
import { HeaderIntrest } from './header-intrest';
import tron from 'reactotron-react-native';
import { Button } from '@rneui/base';
import { palette, width } from 'theme';
import { AText } from 'components';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from 'api/api';
import Toast from 'react-native-toast-message';
import { ErrorComponent } from './error-componnet';
import { useApp, usePrefetch } from 'hooks';
import { OverlayLoading } from './overlay-loading';
import { apiRoutes, QUERYS } from 'constants/index';

export const IntrestChooseScreen = () => {
  const { navigate } = useNavigation();
  const { intrest, setIntrest } = useApp();
  const queryClient = useQueryClient();
  const { prefetchQuery } = usePrefetch(
    queryClient,
    QUERYS.intrest,
    apiRoutes.intrest,
  );
  const saveIntrest = useMutation(
    async (category: any) => {
      const res = await api.put('/api/interest', category);
      if (!res.ok) {
        throw res.data;
      } else {
        return res.data;
      }
    },

    {
      onError(error: any) {
        console.log('error', error);
        Toast.show({
          type: 'error',
          text1: error.error,
        });
      },
      onSuccess() {
        navigate('chooseCom');
      },
    },
  );

  const { data, isError, isLoading } = useQuery(
    [QUERYS.intrest],
    async () => {
      const res = await api.get(apiRoutes.intrest);
      if (!res.ok) {
        throw res.data;
      } else {
        return res.data;
      }
    },
    {
      onError() {
        Toast.show({
          type: 'error',
          text1: 'General Error Please Try Again',
        });
      },
    },
  );

  const _handleChoose = useCallback(
    (payload: any) => {
      setIntrest(payload._id);
    },
    [setIntrest],
  );
  const _handlePutIntrest = () => {
    let Fdata = new FormData();
    Fdata.append('category', intrest.join(','));
    saveIntrest.mutate(Fdata);
  };

  const _handleSubmit = () => {
    intrest.length === 0
      ? Toast.show({
          type: 'error',
          text1: 'You Should At Least Choose One!',
        })
      : _handlePutIntrest();
  };
  if (isError) {
    return (
      <ErrorComponent
        header={
          <HeaderIntrest
            head="Interests"
            content="Pick topics you'd like to see in your home feed"
          />
        }
        tryAgain={prefetchQuery}
        isLoading={isLoading}
      />
    );
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks

  tron.log('in', intrest);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: palette.white,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <HeaderIntrest
          head="Interests"
          content="Pick topics you'd like to see in your home feed"
        />
        <ListIntrest
          isLoading={isLoading}
          data={data}
          _handleChoose={_handleChoose}
          intrest={intrest}
        />
      </ScrollView>
      <Button
        onPress={_handleSubmit}
        disabled={isLoading || saveIntrest.isLoading}
        disabledStyle={{ opacity: 0.5 }}
        containerStyle={{
          width: width,
          paddingHorizontal: 16,
          alignSelf: 'center',
          marginBottom: 10,
        }}
        buttonStyle={{
          backgroundColor: palette.primary,
          borderRadius: 5,
          paddingVertical: 15,
        }}>
        <AText
          style={{ color: palette.white }}
          children="Continue"
          type={'bold'}
          isTouchable={false}
          fz={14}
        />
      </Button>
      {saveIntrest.isLoading && (
        <OverlayLoading isLoading={saveIntrest.isLoading} />
      )}
    </SafeAreaView>
  );
};
