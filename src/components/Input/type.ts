import { IconNode } from '@rneui/base';
import { Control, FieldValues, RegisterOptions } from 'react-hook-form';
import {
  ColorValue,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface Props {
  name: any;
  placeholder?: any;
  disabled?: boolean | undefined;
  ref?: any;
  renderErrorMessage?: boolean | undefined;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  label?: React.ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  multiline?: boolean | undefined;
  numberOfLines?: number | undefined;
  leftIcon?: IconNode | undefined | any;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: IconNode | undefined | any;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  errorStyle: StyleProp<TextStyle>;
  control: Control<FieldValues, any> | undefined;

  inputStyle?: StyleProp<TextStyle>;
  isPassword: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  typeKeyboard?: KeyboardTypeOptions | undefined;
  submitEditing?: any;
  rules: Omit<
    RegisterOptions<FieldValues>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  defaultValue?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
}
