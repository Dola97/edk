import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { RWidth } from 'theme';
import { AText } from './Text/Text';
interface Props {
  width?: number | undefined;
  bg?: ColorValue | undefined;
  br?: number | undefined;
  textColor?: ColorValue | undefined;
  txt?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  height?: number | undefined;
}
export const SubmitButton: React.FC<Props> = ({
  width = RWidth(85),
  bg = '#0074E2',
  br = 6,
  textColor = '#fff',
  txt = 'No',
  height = 33,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width,
        backgroundColor: bg,
        borderRadius: br,
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
      }}>
      <AText
        style={{ color: textColor }}
        children={txt}
        type={'reg'}
        isTouchable={false}
        fz={14}
      />
    </TouchableOpacity>
  );
};
