import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-spinkit';

interface Props {
  isLoading: any;
}
export const OverlayLoading: React.FC<Props> = ({ isLoading }) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
      <Spinner
        isVisible={isLoading}
        size={40}
        type={'Bounce'}
        style={{ alignSelf: 'center' }}
        color="#FFF"
      />
    </View>
  );
};
