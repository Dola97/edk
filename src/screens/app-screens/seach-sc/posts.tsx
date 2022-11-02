import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import { Card } from 'components';
import { useUser } from 'hooks';
import trom from 'reactotron-react-native';
import React, { Fragment, useCallback, useState } from 'react';
import { Alert, ScrollView, Share, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { width } from 'theme';

export const PostsSearch = ({ posts }) => {
  const { navigate } = useNavigation();
  const [data, updateData] = useState(posts);
  const [id, setId] = useState<any>();
  const { user } = useUser();
  let post: any;
  const { mutate } = useMutation(
    async (info: {
      receiverId: any;
      receiverName: any;
      senderName: any;
      commSlug: any;
      postSlug: any;
    }) => {
      post = info.postSlug;
      const res = await api.put(
        `/api/community/post/like/${info?.commSlug}/${info.postSlug.postSlug}`,
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
        trom.log('hello item', post);
        let index = Copy.findIndex(i => i.posts._id === post?._id);
        trom.log('aa', index);
        const isFound = Copy[index].posts.likers.find(
          (obj: any) => obj?.likerId == user?._id,
        );
        trom.log('aa', isFound);
        if (isFound) {
          let x = Copy[index].posts.likers.filter(
            (obj: any) => obj?.likerId !== user?._id,
          );
          Copy[index].posts.likers = x;
        } else {
          Copy[index].posts.likers.push({
            likerId: user?._id,
          });
        }
        trom.log('COPY', Copy);
        updateData(Copy);
      },
    },
  );
  const _handleLike = useCallback(
    item => {
      setId(item.posts);
      mutate({
        receiverId: '62a2c01c2314ab4ab78a679a',
        senderName: 'user',
        receiverName: 'user',
        postSlug: item.posts,
        commSlug: item.slug,
      });
    },
    [mutate],
  );
  const onShare = async item => {
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
  trom.logImportant('hhahah', data);

  return (
    <>
      <ScrollView>
        {data?.map((item, key) => {
          const isLike = item?.posts.likers?.find(
            (obj: any) => obj?.likerId == user?._id,
          );
          return (
            <Fragment key={`posts_search${key}`}>
              <Card
                bg="#FFF"
                isPersonal={false}
                title={item.title}
                pressShare={() => onShare(item)}
                by={'Hello Wait'}
                postImg={
                  item.posts.postType == 'text'
                    ? undefined
                    : 'https://source.unsplash.com/random'
                }
                pressCard={() =>
                  navigate('Post', {
                    item: { ...item.posts, slug: item.slug },
                  })
                }
                desc={item?.posts.description}
                time={'2 month'}
                isLiked={isLike ? true : false}
                likes={item.posts.likesCount}
                comments={item.posts.comments?.length}
                pressMenu={() => {
                  //   setpost(item.posts);
                  //   setModal({ type: 'post', val: true });
                }}
                Join={() => console.log('')}
                isRecomended={false}
                PressLike={() => _handleLike(item)}
                isComment={false}
                detaild={false}
                isLoading={undefined}
              />
              <View
                style={{
                  height: 12,
                  backgroundColor: '#EBF1F3',
                  width: width,
                }}
              />
            </Fragment>
          );
        })}
      </ScrollView>
    </>
  );
};
