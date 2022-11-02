import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import { AText } from 'components/Text/Text';
import { Report, Repost } from 'constants/icons';
import { useApp } from 'hooks';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { width } from 'theme';

export const ModalPostBody = ({ closeModal }: any) => {
  const { post, setpost } = useApp();

  const report = useMutation(
    async (params: { communitySlug: any; postSlug: any }) => {
      const res = await api.put(
        `/api/community/post/${params.communitySlug}/${params.postSlug}`,
      );
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
        Toast.show({
          type: 'success',
          text1: 'Success',
        });
        closeModal();
      },
    },
  );
  const _handleReport = () => {
    report.mutate({ communitySlug: post.slug, postSlug: post.postSlug });
  };
  return (
    <>
      <TouchableOpacity
        onPress={_handleReport}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingBottom: 28,
        }}>
        <Report />
        <AText
          style={{ color: '#272727', paddingLeft: 8 }}
          children="Report"
          type={'semi'}
          isTouchable={false}
          fz={12}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Repost fill="#000000" style={{ right: 3 }} />
        <AText
          style={{ color: '#272727', paddingLeft: 8 }}
          children="Repost"
          type={'semi'}
          isTouchable={false}
          fz={12}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          closeModal();
          setpost(undefined);
        }}
        style={{
          width: width / 1.2,
          paddingVertical: 7,
          backgroundColor: '#272727',
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 31,
        }}>
        <AText
          style={{ color: '#fff' }}
          children="Close"
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
      </TouchableOpacity>
    </>
  );
};
