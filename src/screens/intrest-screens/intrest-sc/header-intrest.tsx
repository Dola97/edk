import { AText } from 'components';
import { IntrestLogo } from 'constants/icons';
import React from 'react';
import { View } from 'react-native';
import { palette } from 'theme';

interface Props {
  head: any;
  content: any;
}
export const HeaderIntrest: React.FC<Props> = ({ head, content }) => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <IntrestLogo style={{ alignSelf: 'center' }} />
      <AText
        style={{
          color: palette.black,
          textAlign: 'center',
          alignSelf: 'center',
          marginTop: 14,
        }}
        children={head}
        type={'bold'}
        isTouchable={false}
        fz={22}
      />
      <AText
        style={{
          color: palette.gray6,
          textAlign: 'center',
          alignSelf: 'center',
          marginTop: 9,
        }}
        children={content}
        type={'reg'}
        isTouchable={false}
        fz={16}
      />
    </View>
  );
};
