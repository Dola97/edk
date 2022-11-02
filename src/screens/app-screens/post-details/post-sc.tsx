import { useNavigation, useRoute } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api/api';
// import { Input } from 'components';
import tron from 'reactotron-react-native';
import { Input } from '@rneui/base';
import { apiRoutes, QUERYS } from 'constants/index';
import { useApp, useFetch, usePrefetch } from 'hooks';
import React, { createRef, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Platform, SafeAreaView, ScrollView, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import { styleAuth } from 'screens/auth-screens/reg-sc/styles';
import { height } from 'theme';
import { CommentInput } from './components/input';
import { Post } from './components/post';
import { OverlayLoading } from 'components';

export const PostDetails = () => {
  const [text, updateComment] = useState('');
  const { post, setpost } = useApp();
  const { goBack } = useNavigation();
  const input = React.createRef();
  const { data: profilee }: any = useFetch(QUERYS.profile, apiRoutes.profile);
  const _handleReply = useCallback(() => {
    input?.current?.focus();
  }, [input]);
  const queryClient = useQueryClient();
  const { params } = useRoute();
  const { item }: any = params;
  const { prefetchQuery } = usePrefetch(
    queryClient,
    QUERYS.post,
    `${apiRoutes.post}${item.slug}/${item.postSlug}`,
  );
  const comment = useMutation(
    async (body: { comment: any }) => {
      const res = await api.put(
        `/api/community/comment/${item.slug}/${item.postSlug}`,
        body,
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
      onSuccess(data: any) {
        Toast.show({
          type: 'success',
          text1: 'Success',
        });
        prefetchQuery();
        updateComment('');
        console.log('data', data);
      },
    },
  );
  const reply = useMutation(
    async (body: { comment: any }) => {
      const res = await api.put(
        `/api/comment/reply/${item.slug}/${item.postSlug}/${post._id}`,
        body,
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
      onSuccess(data: any) {
        Toast.show({
          type: 'success',
          text1: 'Success',
        });
        prefetchQuery();
        updateComment('');
        setpost(undefined);
        console.log('data', data);
      },
    },
  );
  const _handleComment = () => {
    if (post) {
      reply.mutate({ comment: text });
    } else {
      comment.mutate({ comment: text });
    }
  };
  tron.log('item', item, post);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}>
      <ScrollView>
        <Post
          profilee={profilee}
          pressReply={_handleReply}
          BackPress={() => goBack()}
        />
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flex: 1,
          }}>
          <Input
            ref={input}
            renderErrorMessage={false}
            disabled={false}
            value={text}
            errorStyle={styleAuth.error}
            onChangeText={textt => updateComment(textt)}
            onSubmitEditing={() => _handleComment()}
            containerStyle={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
            }}
            inputContainerStyle={{
              ...styleAuth.inputC,
              paddingVertical: 0,
              borderRadius: 32,

              borderColor: '#fff',
            }}
            inputStyle={{ ...styleAuth.input, fontSize: RFValue(12, height) }}
            placeholder="Wirte a comment ..."
          />
        </View>
      </ScrollView>
      {reply.isLoading ||
        (comment.isLoading && <OverlayLoading isLoading={comment.isLoading} />)}
    </SafeAreaView>
  );
};
