import { useNavigation } from '@react-navigation/native';
import { AText } from 'components';
import { Back } from 'constants/icons';
import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

interface Props {
  name: string | undefined;
}
export const HeaderList: React.FC<Props> = memo(props => {
  const { goBack } = useNavigation();
  return (
    <View>
      <TouchableOpacity style={{ marginLeft: 18 }} onPress={() => goBack()}>
        <Back fill="#000" />
      </TouchableOpacity>
      <AText
        style={{ color: '#272727', textAlign: 'center' }}
        children={props.name}
        type={'semi'}
        isTouchable={false}
        fz={20}
      />
    </View>
  );
});
