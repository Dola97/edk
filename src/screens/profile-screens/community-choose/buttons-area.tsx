import { Button } from '@rneui/base';
import { AText } from 'components';
import React from 'react';
import { View } from 'react-native';

interface Props {
  pressSkip: () => void;
  pressContine: () => void;
}

export const Buttons: React.FC<Props> = ({ pressSkip, pressContine }) => {
  console.log('haaa');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Button
        onPress={pressSkip}
        disabled={false}
        disabledStyle={{ opacity: 0.5 }}
        containerStyle={{
          width: 120,
          alignSelf: 'center',
        }}
        buttonStyle={{
          backgroundColor: '#363636',
          borderRadius: 24,
          paddingVertical: 15,
        }}>
        <AText
          style={{ color: '#FFF' }}
          children="Skip"
          type={'bold'}
          isTouchable={false}
          fz={14}
        />
      </Button>
      <Button
        onPress={pressContine}
        disabled={false}
        disabledStyle={{ opacity: 0.5 }}
        containerStyle={{
          width: 120,
          alignSelf: 'center',
        }}
        buttonStyle={{
          backgroundColor: '#0064FE',
          borderRadius: 24,
          paddingVertical: 15,
        }}>
        <AText
          style={{ color: '#FFF' }}
          children="Continue"
          type={'bold'}
          isTouchable={false}
          fz={14}
        />
      </Button>
    </View>
  );
};
