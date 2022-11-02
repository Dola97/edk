import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const palette = {
  gray4: '#C4C4C4',
  gray8: '#828282',
  gray6: '#6D6D6D',
  grayE: '#ECECEC',
  transparent: '#0074E2',
  black: '#000000',
  white: '#FFFFFF',
  primary: '#0064FE',
  secondary: '#272727',
  warning: '#FFA319',
  success: '#42ba96',
  error: '#FF564A',
};

export const spacing = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
};
export const RWidth = (w: any) => {
  return (Dimensions.get('window').width * w) / 376;
};

export const RHeight = (h: any) => {
  return (Dimensions.get('window').height * h) / 812;
};
export const CircleRadios = (x: number) => {
  return x / 2;
};

export { width, height };
