import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Header } from '@rneui/base';
import { Back, WelcomeLogo } from 'constants/icons';
import { RHeight, RWidth } from 'theme';
import { AText } from 'components';
import { Form } from './components/form';
import { useForm } from 'react-hook-form';
import { useModal, useUser } from 'hooks';
import { PrivacyModal } from './components/privacy-modal';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useMutation } from '@tanstack/react-query';
import api, { setAuthToken } from 'api/api';
import Toast from 'react-native-toast-message';
export const RegisterScreen = () => {
  const { control, handleSubmit } = useForm();
  const { navigate, goBack } = useNavigation();
  const { setModal, privacy } = useModal();
  const { setToken, setUser } = useUser();
  const rigister = useMutation(
    async (user: { email: any; name: any; password: any; role: any }) => {
      const res = await api.post('/api/community/signup', user);
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
      },
    },
  );
  const _hanldeSignUp = (formData: any) => {
    const { email, name, password } = formData;
    rigister.mutate({
      email: email,
      name: name,
      password: password,
      role: 'learner',
    });
  };
  const { isLoading } = rigister;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <PrivacyModal
        isVis={privacy}
        closeModal={() => setModal({ type: 'pr', val: false })}
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
          alignItems: 'center',
        }}>
        <AText
          style={{ color: '#363636' }}
          children="Create an account."
          type={'reg'}
          isTouchable={false}
          fz={34}
        />
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ flex: 3, alignItems: 'center', paddingHorizontal: 14 }}>
          <Form
            fetching={isLoading}
            control={control}
            pressText={() => navigate('Login')}
            create={handleSubmit(_hanldeSignUp)}
            pressPrivacy={() => setModal({ type: 'pr', val: true })}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
