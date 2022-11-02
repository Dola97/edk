import React, { useCallback, useState } from 'react';
import { WarnModal } from 'components';
import { useCommunities, useModal, usePrefetch } from 'hooks';
import { View } from 'react-native';
import { ItemCommunity } from './item-community';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api/api';
import Toast from 'react-native-toast-message';
import { QUERYS, apiRoutes } from 'constants/index';
export const UserCommunites = ({ communites }: any) => {
  const { warn, setModal } = useModal();
  const queryClient = useQueryClient();
  const { prefetchQuery } = usePrefetch(
    queryClient,
    QUERYS.mycommunities,
    apiRoutes.mycommunities,
  );
  const { filterdData } = useCommunities(communites);
  const [community, setItem] = useState<any>({});
  const { mutate } = useMutation(
    async (payload: { slug: any }) => {
      const res = await api.put(`/api/unjoin/${payload.slug}`);
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
        prefetchQuery();
        Toast.show({
          type: 'info',
          text1: 'Success',
        });
        setModal({ val: false, type: 'warn' });
      },
    },
  );
  const _handleOpen = useCallback(
    (item: any) => {
      setItem(item);
      setModal({ val: true, type: 'warn' });
    },
    [setModal],
  );
  const _handleExit = () => {
    mutate({ slug: community.slug });
  };
  return (
    <>
      <WarnModal
        Warntext="Are you sure you want to leave this Community?"
        isVis={warn}
        press={_handleExit}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ItemCommunity data={filterdData} pressItem={_handleOpen} />
      </View>
    </>
  );
};
