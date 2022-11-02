import React, { useCallback } from 'react';
import { width } from 'theme';
import { Card } from 'components';
import { Alert, Share, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp, useModal, useUser } from 'hooks';
import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import Toast from 'react-native-toast-message';
export const RenderItem = ({ item, index, updateData, data }: any) => {
  const { navigate } = useNavigation();
  const { setModal } = useModal();
  const { setpost } = useApp();
  const { user } = useUser();
  const { mutate, isLoading } = useMutation(
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
      onSuccess() {
        let Copy = [...data];
        const isFound = Copy[index].likers.find(
          (obj: any) => obj?.likerId == user?._id,
        );
        if (isFound) {
          let x = Copy[index].likers.filter(
            (obj: any) => obj?.likerId !== user?._id,
          );
          Copy[index].likers = x;
        } else {
          Copy[index].likers.push({
            likerId: user?._id,
          });
        }
        updateData(Copy);
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
    } catch (error: any) {
      Alert.alert(error);
    }
  };
  const isLike = item?.likers?.find((obj: any) => obj?.likerId == user?._id);
  return (
    <>
      <Card
        bg="#FFF"
        isLoading={isLoading}
        isPersonal={false}
        title={item.title}
        pressShare={() => onShare()}
        by={'Hello Wait'}
        postImg={
          item.postType == 'text'
            ? undefined
            : 'https://source.unsplash.com/random'
        }
        pressCard={() =>
          navigate('Post', {
            item: { ...item, slug: item.slug },
          })
        }
        desc={item?.description}
        PressLike={_handleLike}
        time={'2 month'}
        isLiked={isLike ? true : false}
        likes={item.likesCount}
        comments={item.comments?.length}
        pressMenu={() => {
          setpost(item);
          setModal({ type: 'post', val: true });
        }}
        Join={() => console.log('')}
        isRecomended={false}
        isComment={false}
        detaild={false}
      />

      <View style={{ height: 12, backgroundColor: '#EBF1F3', width: width }} />
    </>
  );
};
