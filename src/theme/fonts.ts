import { Platform } from 'react-native';

export const fonts = {
  Bold: Platform.OS === 'ios' ? 'Lato-Bold' : 'Lato-Bold',
  Semi: Platform.OS === 'ios' ? 'Lato-Semibold' : 'Lato-Semibold',
  Light: Platform.OS === 'ios' ? 'Lato-Light' : 'Lato-Light',
  Black: Platform.OS === 'ios' ? 'Lato-Black' : 'Lato-Black',
  Reg: Platform.OS === 'ios' ? 'Lato-Regular' : 'Lato-Regular',
  thin: Platform.OS === 'ios' ? 'Lato-Thin' : 'Lato-Thin',
  italic: Platform.OS === 'ios' ? 'Lato-Italic' : 'Montserrat-Italic',
};
