import { Button, Divider } from '@rneui/base';
import { AText } from 'components';
import { AppleLogo, GoogleLogo } from 'constants/icons';
import React from 'react';
import { View } from 'react-native';
import { RHeight, RWidth, width } from 'theme';

interface Props {
  pressText: () => void;
  create: () => void;
  apple: () => void;
  google: () => void;
}
export const ButtonsArea: React.FC<Props> = ({
  pressText,
  create,
  google,
  apple,
}) => {
  return (
    <>
      <Button
        onPress={create}
        containerStyle={{ width, paddingHorizontal: 16, alignSelf: 'center' }}
        buttonStyle={{
          backgroundColor: '#0064FE',
          borderRadius: 8,
          paddingVertical: 22,
        }}>
        <AText
          style={{ color: '#FFF' }}
          children="Create account"
          type={'reg'}
          isTouchable={false}
          fz={17}
        />
      </Button>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 18,
        }}>
        <Divider
          orientation="horizontal"
          width={1}
          style={{ width: width / 2.5 }}
          color="#272727"
        />
        <AText
          style={{ color: '#000000', paddingHorizontal: 8 }}
          children="Or"
          type={'reg'}
          isTouchable={false}
          fz={16}
        />
        <Divider
          orientation="horizontal"
          width={1}
          style={{ width: width / 2.5 }}
          color="#272727"
        />
      </View>
      <Button
        containerStyle={{ width: width, marginTop: 22, paddingHorizontal: 16 }}
        onPress={apple}
        icon={<AppleLogo width={RWidth(25)} height={RHeight(25)} />}
        buttonStyle={{
          backgroundColor: '#101010',
          borderRadius: 8,
          paddingVertical: 22,
        }}>
        <AText
          style={{ color: '#FFF', paddingLeft: 18 }}
          children="Continue with Apple"
          type={'reg'}
          isTouchable={false}
          fz={17}
        />
      </Button>
      <Button
        onPress={google}
        containerStyle={{
          paddingHorizontal: 22,
          alignSelf: 'center',
          width,
          marginTop: 10,
          borderRadius: 8,
          paddingBottom: 10,
        }}
        icon={<GoogleLogo width={RWidth(25)} height={RHeight(25)} />}
        buttonStyle={{
          backgroundColor: '#FFEFEE',
          borderRadius: 8,
          paddingVertical: 22,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}>
        <AText
          style={{ color: '#000000', paddingLeft: 18 }}
          children="Continue with Google"
          type={'reg'}
          isTouchable={false}
          fz={17}
        />
      </Button>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <AText
          style={{ color: '#000000' }}
          children="Already have an account?"
          type={'reg'}
          isTouchable={false}
          fz={15}
        />
        <AText
          style={{
            color: '#0064FE',
            textDecorationLine: 'underline',
            textDecorationColor: '#0064FE',
            paddingLeft: 8,
            bottom: 1,
          }}
          children="Sign In"
          type={'reg'}
          pressText={pressText}
          isTouchable={true}
          fz={15}
        />
      </View>
    </>
  );
};
