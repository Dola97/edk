declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<
    SvgProps & {
      fillSecondary?: string;
    }
  >;
  export default content;
}
declare module '@react-native-community/netinfo';
declare module 'react-native-animatable-unmountable';
declare module 'react-query';
