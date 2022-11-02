import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts, height } from 'theme';

export const styleAuth = StyleSheet.create({
  error: {
    color: '#FF564A',
    fontFamily: fonts.Reg,
    fontSize: RFValue(12, height),
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 5,
  },
  inputC: {
    borderColor: '#0064FE',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: 12,
  },
  input: {
    color: '#000000',
    fontFamily: fonts.Reg,
    fontSize: RFValue(17, height),
    paddingHorizontal: 18,
    paddingTop: 6,
  },
  label: {
    position: 'absolute',
    left: 30,
    top: 10,
    opacity: 0.4,
    color: '#000',
    fontFamily: fonts.Reg,
    fontSize: RFValue(12, height),
  },
});
