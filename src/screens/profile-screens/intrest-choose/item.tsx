import { AText } from 'components';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { palette } from 'theme';

interface Props {
  txt: any;
  index?: any;
  pressitem: () => void;
  item: any;
  intrest: any;
}
export const IntrestItem: React.FC<Props> = ({
  txt,
  pressitem,
  index,
  intrest,
  item,
}) => {
  const isSelected = intrest.find((la: any) => la === item?._id);
  return (
    <TouchableOpacity
      key={index}
      onPress={pressitem}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected ? palette.primary : 'transparent',
        borderColor: isSelected ? palette.primary : '#707070',
        borderRadius: 18,
        paddingVertical: 10,
        borderWidth: 1,
        marginRight: 8,
        paddingHorizontal: 20,
        marginBottom: 12,
      }}>
      <AText
        style={{ color: isSelected ? '#fff' : '#4A4A4A' }}
        children={txt}
        type={'bold'}
        isTouchable={false}
        fz={14}
      />
    </TouchableOpacity>
  );
};
