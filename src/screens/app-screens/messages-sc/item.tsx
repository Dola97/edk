import React from 'react';
import { AText, CourseCard } from 'components';
import { Image, View } from 'react-native';
import { RHeight, RWidth } from 'theme';

export const RenderItem = ({ item }: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 16,
        alignItems: 'center',
      }}>
      <Image
        style={{ width: RWidth(34), height: RHeight(34), borderRadius: 34 / 2 }}
        source={{ uri: 'https://picsum.photos/200/300' }}
      />
      <AText
        style={{ color: '#272727' }}
        children={undefined}
        type={'bold'}
        isTouchable={false}
        fz={undefined}
      />
    </View>
  );
};
