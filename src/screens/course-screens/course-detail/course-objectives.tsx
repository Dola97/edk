import { AText } from 'components';
import React from 'react';
import { View } from 'react-native';
import { RHeight, RWidth } from 'theme';

interface Props {
  objectives: any[];
}
export const CourseObjectives: React.FC<Props> = ({ objectives }) => {
  return (
    <>
      <AText
        style={{
          color: '#272727',
          marginHorizontal: 16,
          marginTop: 24,
          marginBottom: 8,
        }}
        children="Learning Objectives"
        type={'semi'}
        isTouchable={false}
        fz={16}
      />
      {objectives.map((obj, key) => {
        return (
          <View
            key={`objiecties,_ket{ke},${key}`}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginHorizontal: 16,
              marginBottom: 4,
            }}>
            <View
              style={{
                width: RWidth(7),
                height: RHeight(7),
                borderRadius: 90,
                borderColor: '#000000',
                borderWidth: 1,
                backgroundColor: '#000',
              }}
            />
            <AText
              style={{ color: '#272727', paddingLeft: 6 }}
              children={obj}
              type={'reg'}
              isTouchable={false}
              fz={14}
            />
          </View>
        );
      })}
    </>
  );
};
