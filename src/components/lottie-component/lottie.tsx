import React from 'react';
import LottieView, { AnimationObject } from 'lottie-react-native';
import { StyleProp, ViewStyle } from 'react-native';

interface props {
  source:
    | string
    | AnimationObject
    | {
        uri: string;
      };
  loop?: boolean | undefined;
  iconStyle: StyleProp<ViewStyle>;
}
export const LottieIcon: React.FC<props> = React.memo(props => {
  return (
    <LottieView
      style={props.iconStyle}
      source={props.source}
      autoPlay
      loop={props.loop}
    />
  );
});
