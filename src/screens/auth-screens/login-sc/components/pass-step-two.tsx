import React from 'react';
import { RHeight, RWidth } from 'theme';
import { AText, LottieIcon } from 'components';
import { View } from 'react-native';
interface Props {
  create: () => void;
}

export const StepTwo: React.FC<Props> = () => {
  var Icon = require('assets/json/done.json');
  return (
    <>
      <LottieIcon
        source={Icon}
        iconStyle={{
          width: RWidth(150),
          height: RHeight(150),
          alignSelf: 'center',
        }}
        loop={false}
      />
      <AText
        style={{ color: '#000', paddingTop: 40, textAlign: 'center' }}
        children="Success!"
        type={'reg'}
        isTouchable={false}
        fz={34}
      />
      <AText
        style={{
          color: '#000',
          paddingTop: 20,
          textAlign: 'center',
          opacity: 0.7,
          paddingHorizontal: 50,
        }}
        children="Now check your email for confirmation link."
        type={'reg'}
        isTouchable={false}
        fz={20}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <AText
          style={{ color: '#000', textAlign: 'center' }}
          children="Didn’t receive it?"
          type={'reg'}
          isTouchable={false}
          fz={15}
        />
        <AText
          style={{
            color: '#0064FE',
            textAlign: 'center',
            textDecorationLine: 'underline',
            textDecorationColor: '#0064FE',
            paddingLeft: 10,
          }}
          children="Click here"
          type={'reg'}
          pressText={() => console.log('aopi')}
          isTouchable={true}
          fz={15}
        />
      </View>
    </>
  );
};
