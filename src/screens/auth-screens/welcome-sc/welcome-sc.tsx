import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { WelcomeLogo } from 'constants/icons';
import { ButtonsArea, TxtArea } from './components';
import { useNavigation } from '@react-navigation/native';
import { useUser } from 'hooks';

export const WelcomeScreen = () => {
  const { navigate } = useNavigation();
  const { token } = useUser();
  console.log('hello', token);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <WelcomeLogo style={{ alignSelf: 'center', marginTop: 48 }} />
      <TxtArea />
      <View style={{ flex: 2, alignItems: 'center', flexDirection: 'column' }}>
        <ButtonsArea
          create={() => navigate('SignUp')}
          pressText={() => navigate('Login')}
          apple={() => console.log('')}
          google={() => console.log('d')}
        />
      </View>
    </SafeAreaView>
  );
};
