import { AText } from 'components/Text/Text';
import React, { memo } from 'react';
import { View } from 'react-native';
import { RHeight, RWidth } from 'theme';

interface Props {
  color: any;
  name: any;
}
export const Chip: React.FC<Props> = memo(props => {
  return (
    <View
      style={{
        width: RWidth(70),
        height: RHeight(23),
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: props.color,
      }}>
      <AText
        style={{ color: '#FFF' }}
        children={props.name}
        type={'semi'}
        isTouchable={false}
        fz={12}
      />
    </View>
  );
});
