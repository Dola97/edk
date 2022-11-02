import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api/api';
import { AText, Input } from 'components';
import { apiRoutes, QUERYS } from 'constants/index';
import { useFetch, usePrefetch } from 'hooks';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import { styleAuth } from 'screens/auth-screens/reg-sc/styles';
import { fonts, height, palette, RHeight, width } from 'theme';

export const FormProfile = () => {
  const queryClient = useQueryClient();
  const { control, handleSubmit } = useForm();
  const { goBack } = useNavigation();
  const { prefetchQuery } = usePrefetch(
    queryClient,
    QUERYS.myProfile,
    apiRoutes.myProfile,
  );
  const { data, isLoading: loading }: any = useFetch(
    QUERYS.myProfile,
    apiRoutes.myProfile,
  );
  const { isLoading, mutate } = useMutation(
    async (body: {
      firstName: any;
      lastName: any;
      jobTitle: any;
      education: any;
      country: any;
      city: any;
      biography: any;
    }) => {
      const res = await api.put('/api/update-my-profile', body);
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
        goBack();
        prefetchQuery();
      },
    },
  );
  const _handleUpdate = (form: any) => {
    const { name, about, job, edu, country, city } = form;
    mutate({
      firstName: name,
      lastName: name,
      biography: about,
      jobTitle: job,
      education: edu,
      country: country,
      city: city,
    });
  };
  console.log('OverlayLoading', isLoading);
  return (
    <>
      <Input
        name="name"
        defaultValue={data?.name}
        renderErrorMessage={false}
        disabled={isLoading ? true : loading ? true : false}
        errorStyle={styleAuth.error}
        control={control}
        inputContainerStyle={{
          ...styleAuth.inputC,
          paddingVertical: 7,
          borderColor: '#CDD4D9',
        }}
        inputStyle={{ ...styleAuth.input, paddingTop: 0 }}
        isPassword={false}
        label="Name"
        labelStyle={{
          fontSize: RFValue(12, height),
          fontFamily: fonts.Reg,
          marginHorizontal: 2,
          paddingBottom: 7,
        }}
        rules={{
          required: 'Name Required',
        }}
      />

      <Input
        name="about"
        defaultValue={data?.biography}
        renderErrorMessage={false}
        disabled={isLoading ? true : loading ? true : false}
        errorStyle={styleAuth.error}
        control={control}
        multiline
        containerStyle={{ marginTop: 20 }}
        inputContainerStyle={{
          ...styleAuth.inputC,
          paddingVertical: 0,
          height: RHeight(136),
          borderColor: '#CDD4D9',
          alignItems: 'flex-start',
        }}
        inputStyle={{
          ...styleAuth.input,
          textAlignVertical: 'top',
          paddingTop: 16,
          paddingBottom: 0,
        }}
        isPassword={false}
        label="About yourself"
        labelStyle={{
          fontSize: RFValue(12, height),
          fontFamily: fonts.Reg,
          marginHorizontal: 2,
          paddingBottom: 7,
        }}
        rules={{
          required: 'About Required',
        }}
      />
      <Input
        name="job"
        defaultValue={data?.jobTitle}
        renderErrorMessage={false}
        disabled={isLoading ? true : loading ? true : false}
        errorStyle={styleAuth.error}
        containerStyle={{ marginVertical: 20 }}
        control={control}
        inputContainerStyle={{
          ...styleAuth.inputC,
          paddingVertical: 7,
          borderColor: '#CDD4D9',
        }}
        inputStyle={{ ...styleAuth.input, paddingTop: 0 }}
        isPassword={false}
        label="Job Title"
        labelStyle={{
          fontSize: RFValue(12, height),
          fontFamily: fonts.Reg,
          marginHorizontal: 2,
          paddingBottom: 7,
        }}
        rules={{
          required: 'Job Required',
        }}
      />
      <Input
        name="edu"
        defaultValue={data?.education}
        renderErrorMessage={false}
        disabled={isLoading ? true : loading ? true : false}
        errorStyle={styleAuth.error}
        control={control}
        inputContainerStyle={{
          ...styleAuth.inputC,
          paddingVertical: 7,
          borderColor: '#CDD4D9',
        }}
        inputStyle={{ ...styleAuth.input, paddingTop: 0 }}
        isPassword={false}
        label="Education"
        labelStyle={{
          fontSize: RFValue(12, height),
          fontFamily: fonts.Reg,
          marginHorizontal: 2,
          paddingBottom: 7,
        }}
        rules={{
          required: 'Education Required',
        }}
      />
      <Input
        name="country"
        defaultValue={data?.country}
        renderErrorMessage={false}
        disabled={isLoading ? true : loading ? true : false}
        containerStyle={{ marginVertical: 20 }}
        errorStyle={styleAuth.error}
        control={control}
        inputContainerStyle={{
          ...styleAuth.inputC,
          paddingVertical: 7,
          borderColor: '#CDD4D9',
        }}
        inputStyle={{ ...styleAuth.input, paddingTop: 0 }}
        isPassword={false}
        label="Country"
        labelStyle={{
          fontSize: RFValue(12, height),
          fontFamily: fonts.Reg,
          marginHorizontal: 2,
          paddingBottom: 7,
        }}
        rules={{
          required: 'Country Required',
        }}
      />
      <Input
        name="city"
        defaultValue={data?.cityId}
        renderErrorMessage={false}
        disabled={isLoading ? true : loading ? true : false}
        errorStyle={styleAuth.error}
        control={control}
        inputContainerStyle={{
          ...styleAuth.inputC,
          paddingVertical: 7,
          borderColor: '#CDD4D9',
        }}
        inputStyle={{ ...styleAuth.input, paddingTop: 0 }}
        isPassword={false}
        label="City"
        labelStyle={{
          fontSize: RFValue(12, height),
          fontFamily: fonts.Reg,
          marginHorizontal: 2,
          paddingBottom: 7,
        }}
        rules={{
          required: 'City Required',
        }}
      />
      <TouchableOpacity
        onPress={handleSubmit(_handleUpdate)}
        disabled={isLoading}
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: palette.primary,
          width: width / 1.1,
          height: 37,
          borderRadius: 6,
          marginTop: 20,
        }}>
        <AText
          style={{ color: '#fff' }}
          children="Save"
          type={'reg'}
          isTouchable={false}
          fz={14}
        />
      </TouchableOpacity>
      {/* <OverlayLoading isLoading={isLoading} /> */}
    </>
  );
};
