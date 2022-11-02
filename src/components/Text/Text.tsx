import React from 'react';
import {
  StyleProp,
  Text as RNText,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts, height } from 'theme';

export interface TextProps {
  style: StyleProp<TextStyle>;
  children: React.ReactNode;
  type: 'bold' | 'reg' | 'thin' | 'italic' | 'black' | 'light' | 'semi';
  isTouchable: boolean;
  pressText?: () => void;
  fz: number | any;
  Touchstyle?: StyleProp<ViewStyle>;
}

export const AText = ({
  children,
  style,
  pressText,
  Touchstyle,
  type,
  isTouchable,
  fz,
  ...rest
}: TextProps) => (
  <TouchableOpacity
    style={Touchstyle}
    disabled={isTouchable ? false : true}
    onPress={pressText}>
    <RNText
      {...rest}
      style={{
        //@ts-ignore
        ...style,
        fontSize: RFValue(fz, height),
        fontFamily:
          type === 'bold'
            ? fonts.Bold
            : type === 'reg'
            ? fonts.Reg
            : type === 'light'
            ? fonts.Light
            : type === 'italic'
            ? fonts.italic
            : type === 'black'
            ? fonts.Black
            : type === 'thin'
            ? fonts.thin
            : type === 'semi' && fonts.Semi,
      }}>
      {children}
    </RNText>
  </TouchableOpacity>
);
