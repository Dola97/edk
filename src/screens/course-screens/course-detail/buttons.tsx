import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import { WarnButton } from 'components';
import React from 'react';
import Toast from 'react-native-toast-message';
import { width } from 'theme';
interface Props {
  isFav: boolean;
}
export const Buttons: React.FC<Props> = ({ isFav }) => {
  const courseId = '6164a3113e55640bf5268372';
  const courseSlug = 'dsd';

  const setFav = useMutation(
    async () => {
      const res = await api.put(`/api/wishlist/add/${courseId}`);
      if (!res.ok) {
        throw res.data;
      } else {
        return res.data;
      }
    },

    {
      onError(error: any) {
        console.log('e', error);
        Toast.show({
          type: 'error',
          text1: error,
        });
      },
      onSuccess(data: any) {
        console.log('s', data);
        Toast.show({
          type: 'success',
          text1: data,
        });
      },
    },
  );
  const Enroll = useMutation(
    async () => {
      const res = await api.post(`/api/course-enrol/${courseSlug}`);
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
          text1: 'General Error',
        });
      },
      onSuccess(data: any) {},
    },
  );
  const _handleAddToFav = () => {
    setFav.mutate();
  };
  const _handleEnrollCourse = () => {
    Enroll.mutate();
  };
  return (
    <>
      <WarnButton
        //@ts-ignore
        alignSelf="center"
        marginBottom={8}
        disabled={setFav.isLoading || Enroll.isLoading}
        marginTop={24}
        onPress={_handleEnrollCourse}
        width={width / 1.11}
        height={58}
        bg="#0074E2"
        txt="Enroll in Course"
      />
      {!isFav && (
        <WarnButton
          height={58}
          bg="#FFA319"
          disabled={setFav.isLoading || Enroll.isLoading}
          width={width / 1.11}
          //@ts-ignore
          alignSelf="center"
          onPress={_handleAddToFav}
          txt="Set as Favorite"
        />
      )}
    </>
  );
};
