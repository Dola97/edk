import React from 'react';
import { Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import * as Animatable from 'react-native-animatable-unmountable';
import { SplashLogo } from 'constants/icons';
import { useNavigation } from '@react-navigation/native';
import { fonts } from 'theme';
import { useApp, useUser } from 'hooks';

export const SpalshScreen = () => {
  const { navigate } = useNavigation();
  const { setSplash } = useApp();
  const { token } = useUser();
  const [ismount, setMount] = React.useState(true);
  const _navigateToApp = () => {
    try {
      setSplash(true);
    } catch (e) {
      // R.log("rerr");
    }
  };
  console.log('aaa');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0074E2',
      }}>
      <Animatable.View
        useNativeDriver
        mounted={ismount}
        duration={1000}
        unmountDuration={2000}
        unmountDelay={3000}
        didMount={() => {
          setMount(false);
          console.log(ismount);
        }}
        didUnmount={() => {
          _navigateToApp();
        }}
        unmountAnimation="fadeOutUpBig"
        animation="fadeIn">
        <SplashLogo />
      </Animatable.View>
      <Text
        style={{
          position: 'absolute',
          bottom: 20,
          color: '#FFFFFF',
          fontFamily: fonts.Bold,
          textTransform: 'uppercase',
        }}>
        V{DeviceInfo.getVersion()}
      </Text>
    </View>
  );
};
