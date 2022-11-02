import React, { Fragment, useCallback } from 'react';
import { Platform, SafeAreaView, ScrollView, View } from 'react-native';
import { CommunityItem } from './community-item';
import * as Animatable from 'react-native-animatable';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AText } from 'components';
import { HeaderIntrest } from '../intrest-choose/header-intrest';
import { useApp, usePrefetch } from 'hooks';
import { Buttons } from './buttons-area';
import api from 'api/api';
import Toast from 'react-native-toast-message';
import { ErrorComponent } from '../intrest-choose/error-componnet';
import { useCommunities } from 'hooks';
import { apiRoutes, QUERYS } from 'constants/index';
import { useNavigation } from '@react-navigation/native';

export const CommuntyChooseScreen = () => {
  const { setCommunities, communities } = useApp();
  const { navigate } = useNavigation();
  const queryClient = useQueryClient();
  const { prefetchQuery: prefetchProfile } = usePrefetch(
    queryClient,
    QUERYS.profile,
    apiRoutes.profile,
  );
  const { prefetchQuery } = usePrefetch(
    queryClient,
    QUERYS.communities,
    apiRoutes.communities,
  );

  const { data, isError, isLoading }: any = useQuery(
    [QUERYS.communities],
    async () => {
      const res = await api.get(apiRoutes.communities);
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
  let id: any;
  const communityAction = useMutation(
    async (payload: { slug: any; route: any }) => {
      id = payload.slug._id;
      const res = await api.put(`/api/${payload.route}/${payload.slug.slug}`);
      if (!res.ok) {
        throw res.data;
      } else {
        return res.data;
      }
    },

    {
      onError(error: any) {
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      },
      onSuccess() {
        setCommunities(id);
        Toast.show({
          type: 'info',
          text1: 'Success',
        });
      },
    },
  );

  const _handleChoose = useCallback(
    (payload: any) => {
      const itemExists = communities.find((item: any) => item === payload._id);
      itemExists
        ? communityAction.mutate({ slug: payload, route: 'unjoin' })
        : communityAction.mutate({ slug: payload, route: 'join' });
    },
    [communities, communityAction],
  );
  const { filterdData } = useCommunities(data);
  const _skip = useCallback(() => {
    prefetchProfile();
    navigate('profile');
  }, [navigate, prefetchProfile]);
  if (isError) {
    return (
      <ErrorComponent
        header={
          <HeaderIntrest
            head="Commununities"
            content="Select a few to get started. You can update them later"
          />
        }
        tryAgain={prefetchQuery}
        isLoading={isLoading}
      />
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}>
      <HeaderIntrest
        head="Commununities"
        content="Select a few to get started. You can update them later"
      />
      <View
        style={{
          justifyContent: 'center',
          flex: 4,
          alignItems: 'center',
        }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {filterdData?.map((item: any, key: any) => (
            <Animatable.View
              animation="fadeInUp"
              delay={key * 100}
              key={`intrest_key_${key}`}
              useNativeDriver
              style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                  marginTop: 20,
                }}>
                <AText
                  style={{ color: '#272727' }}
                  children={item.category.englishName}
                  type={'bold'}
                  isTouchable={false}
                  fz={14}
                />
                <AText
                  style={{ color: '#272727' }}
                  children="View more"
                  type={'reg'}
                  isTouchable={true}
                  pressText={() => console.log()}
                  fz={12}
                />
              </View>
              {item?.intrests?.map((cat: any, index: any) => (
                <Fragment key={`hjshdjkshds${index}`}>
                  <CommunityItem
                    pressItem={() => _handleChoose(cat)}
                    // isSelected={_isSelected(cat)}
                    txt={cat?.title}
                    body={cat?.description}
                    intrest={communities}
                    item={cat}
                  />
                </Fragment>
              ))}
            </Animatable.View>
          ))}
          <Buttons pressSkip={_skip} pressContine={_skip} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
