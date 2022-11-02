import React from 'react';
import { View } from 'react-native';
import { AText } from 'components';

export const TxtArea = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AText
        style={{ color: '#0064FE' }}
        children="Sign Up"
        type={'bold'}
        isTouchable={false}
        fz={34}
      />
      <AText
        style={{
          color: '#000',
          opacity: 0.7,
          textAlign: 'center',
          paddingTop: 16,
        }}
        children="The first e-learning Social Mobile App for continuous development in the Middle East"
        type={'reg'}
        isTouchable={false}
        fz={16}
      />
    </View>
  );
};
