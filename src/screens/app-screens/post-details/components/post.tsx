import { useRoute } from '@react-navigation/native';
import { Card, OverlayLoading, PostModal } from 'components';
import { Back } from 'constants/icons';
import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View, Share } from 'react-native';
import { width } from 'theme';
import { Comments } from './comments';
import tron from 'reactotron-react-native';

import {
  useApp,
  useFetch,
  useIsLike,
  useModal,
  usePrefetch,
  useUser,
} from 'hooks';
import { QUERYS, apiRoutes } from 'constants/index';
import api from 'api/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { Alert } from 'react-native';

interface Props {
  BackPress: () => void;
  pressReply: () => void;
  profilee: any;
}

export const Post: React.FC<Props> = ({ BackPress, pressReply, profilee }) => {
  const { params } = useRoute();
  const { item }: any = params;
  const { user } = useUser();
  const isLike = item?.likers?.find((obj: any) => obj?.likerId == user?._id);
  const [isLiked, updateLike] = useState(isLike ? true : false);

  const { setpost } = useApp();
  const { setModal } = useModal();
  const { data, isLoading }: any = useFetch(
    QUERYS.post,
    `${apiRoutes.post}${item.slug}/${item.postSlug}`,
  );
  const { mutate, isLoading: loading } = useMutation(
    async (info: {
      receiverId: any;
      receiverName: any;
      senderName: any;
      commSlug: any;
      postSlug: any;
    }) => {
      const res = await api.put(
        `/api/community/post/like/${info?.commSlug}/${info.postSlug}`,
        {
          receiverId: info.receiverId,
          receiverName: info.receiverName,
          senderName: info.senderName,
        },
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
          text1: error.error,
        });
      },
      onSuccess(dataa: any) {
        Toast.show({
          type: 'success',
          text1: dataa.message,
        });
        isLiked ? updateLike(false) : updateLike(true);
      },
    },
  );
  const _handleLike = useCallback(() => {
    mutate({
      receiverId: '62a2c01c2314ab4ab78a679a',
      senderName: 'user',
      receiverName: 'user',
      postSlug: item.postSlug,
      commSlug: item.slug,
    });
  }, [item.postSlug, item.slug, mutate]);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: item.description,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <>
      <PostModal />
      <TouchableOpacity
        onPress={BackPress}
        style={{ marginTop: 20, paddingHorizontal: 16 }}>
        <Back fill="#363636" />
      </TouchableOpacity>
      <Card
        bg="#FFF"
        detaild
        postImg={
          item.postType === 'text'
            ? undefined
            : 'https://source.unsplash.com/random'
        }
        isPersonal={false}
        title={item.title}
        by="sfjkdjfd"
        pressMenu={() => {
          setpost(item);
          setModal({ type: 'post', val: true });
        }}
        likes={item.likesCount}
        pressShare={() => onShare()}
        isLiked={isLiked}
        comments={item.comments?.length}
        desc={item.description}
        time={'s'}
        isComment={false}
        isLoading={false} // isLoading={loading}
        PressLike={_handleLike}
      />
      <View style={{ height: 12, backgroundColor: '#EBF1F3', width: width }} />
      <Comments
        pressReply={pressReply}
        timeAgo={'timeAgo'}
        comments={data?.comments}
      />
    </>
  );
};
