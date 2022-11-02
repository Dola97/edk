import React from 'react';
import Toast from 'react-native-toast-message';
import { useForm } from 'react-hook-form';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { RHeight, RWidth } from 'theme';
import { Header } from '@rneui/base';
import { AText } from 'components';
import { Back, WelcomeLogo } from 'constants/icons';
import { useMutation } from '@tanstack/react-query';
import { Form } from './components/form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PasswordModal } from './components/password-modal';
import { useModal, useUser } from 'hooks';
import { useNavigation } from '@react-navigation/native';
import api from 'api/api';
import { setAuthToken } from 'api/api';

export const LoginScreen = () => {
  const { control, handleSubmit } = useForm();
  const { setUser, setToken, setChoosedIntrest } = useUser();
  const { goBack } = useNavigation();
  const { password, setModal } = useModal();
  const login = useMutation(
    async (user: { email: any; password: any }) => {
      const res = await api.post('/api/signin', user);
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
        setAuthToken(data.token);
        setToken(data.token);
        setUser(data.user);
        setChoosedIntrest(true);
        console.log('data', data);
      },
    },
  );
  const { isLoading } = login;
  const _handleLogin = (formData: any) => {
    const { email, pass } = formData;

    login.mutate({ email: email, password: pass });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <PasswordModal
        isVis={password}
        closeModal={() => setModal({ type: 'password', val: false })}
      />
      <Header
        backgroundColor="#FFF"
        centerContainerStyle={{ bottom: 5 }}
        leftComponent={
          <TouchableOpacity onPress={() => goBack()}>
            <Back fill="#0064fe" />
          </TouchableOpacity>
        }
        centerComponent={
          <WelcomeLogo width={RWidth(113)} height={RHeight(24)} />
        }
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingHorizontal: 16,
        }}>
        <AText
          style={{ color: '#363636' }}
          children="Sign in to your account"
          type={'reg'}
          isTouchable={false}
          fz={22}
        />
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ flex: 4, paddingHorizontal: 14 }}>
          <Form
            fetching={isLoading}
            control={control}
            create={handleSubmit(_handleLogin)}
            pressText={() => setModal({ type: 'password', val: true })}
            apple={function (): void {
              throw new Error('Function not implemented.');
            }}
            google={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
