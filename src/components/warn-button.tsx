import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { RHeight, RWidth } from 'theme';
import { AText } from './Text/Text';
interface Props {
  width?: number | undefined;
  bg?: ColorValue | undefined;
  br?: number | undefined;
  textColor?: ColorValue | undefined;
  txt?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  height?: number | undefined;
  disabled?: boolean;
}
export const WarnButton: React.FC<Props> = ({
  width = RWidth(85),
  bg = '#FF564A',
  br = 6,
  textColor = '#fff',
  txt = 'Yes',
  height = 33,
  disabled = false,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        width: RWidth(width),
        backgroundColor: bg,
        borderRadius: br,
        alignItems: 'center',
        justifyContent: 'center',
        height: RHeight(height),
        ...rest,
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
