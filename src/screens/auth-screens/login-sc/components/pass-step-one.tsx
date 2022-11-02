import { Button } from '@rneui/base';
import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import { AText, Input } from 'components';
import { EMAIL_REGEX } from 'constants/index';
import { useApp } from 'hooks';
import React from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { styleAuth } from 'screens/auth-screens/reg-sc/styles';
import { width } from 'theme';

interface Props {}

export const StepOne: React.FC<Props> = () => {
  const { control, handleSubmit } = useForm();
  const { setStepPass } = useApp();
  const forget = useMutation(
    async (user: { email: any }) => {
      const res = await api.post('/api/forgot-password', user);
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
          text1: data.message,
        });
        setStepPass(2);
      },
    },
  );
  const { isLoading, error, isError } = forget;
  const _handleForget = (formData: any) => {
    const { email } = formData;

    forget.mutate({ email });
  };
  console.log('error', error);
  return (
    <>
      <AText
        style={{
          color: '#000000',
          textAlign: 'left',
          marginTop: 7,
          paddingHorizontal: 16,
        }}
        children="Forgot password?"
        type={'reg'}
        isTouchable={false}
        fz={22}
      />

      <AText
        style={{
          color: '#000000',
          textAlign: 'left',
          marginTop: 19,
          paddingHorizontal: 16,
        }}
        children="Enter your email below and we will send you a reset email. "
        type={'reg'}
        isTouchable={false}
        fz={15}
      />

      <Input
        name="email"
        renderErrorMessage={false}
        disabled={isLoading}
        errorStyle={styleAuth.error}
        control={control}
        containerStyle={{
          marginTop: 31,
        }}
        inputContainerStyle={{
          ...styleAuth.inputC,
          width: width / 1.09,
        }}
        inputStyle={styleAuth.input}
        isPassword={false}
        label="Email"
        labelStyle={styleAuth.label}
        rules={{
          required: 'Email Required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Email Invalid',
          },
        }}
      />
      <Button
        onPress={handleSubmit(_handleForget)}
        loading={isLoading}
        disabled={isLoading}
        containerStyle={{
          width: width,
          alignSelf: 'center',
          paddingHorizontal: 16,
        }}
        buttonStyle={{
          backgroundColor: '#0064FE',
          borderRadius: 8,
          paddingVertical: 22,
          marginVertical: 20,
        }}>
        <AText
          style={{ color: '#FFF' }}
          children="Submit"
          type={'reg'}
          isTouchable={false}
          fz={17}
        />
      </Button>
      {isError && (
        <AText
          style={{ color: '#FF564A', textAlign: 'center' }}
          children={error.error}
          type={'bold'}
          isTouchable={false}
          fz={16}
        />
      )}
    </>
  );
};
