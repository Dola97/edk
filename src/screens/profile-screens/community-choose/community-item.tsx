import { Image } from '@rneui/base';
import { AText } from 'components';
import { Done, Plus } from 'constants/icons';
import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RHeight, RWidth, width } from 'theme';

interface Props {
  txt: any;
  body: string;
  pressItem: () => void;
  intrest?: any;
  item?: any;
  isMine?: boolean;
}
export const CommunityItem: React.FC<Props> = memo(
  ({ txt, body, intrest, item, pressItem, isMine = false }) => {
    const isSelected = intrest?.find((la: any) => la === item?._id);
    console.log('5ra');
    return (
      <TouchableOpacity
        onPress={pressItem}
        style={{
          backgroundColor: isMine
            ? '#DCECFB'
            : isSelected
            ? '#DCECFB'
            : '#F8F8F8',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: width / 1.1,
          borderRadius: 12,
          paddingHorizontal: 16,
          paddingVertical: 10,
          marginBottom: 8,
          overflow: 'scroll',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <Image
            source={{ uri: 'https://source.unsplash.com/random' }}
            containerStyle={{
              borderRadius: 49,
              width: RWidth(49),
              height: RHeight(49),
              marginRight: 8,
            }}
          />
          <View>
            <AText
              style={{ color: '#272727' }}
              children={txt}
              type={'semi'}
              isTouchable={false}
              fz={12}
            />
            <AText
              style={{
                color: '#272727',
                paddingTop: 4,

                flexWrap: 'wrap',
              }}
              children={`${body.slice(0, 50)} ...`}
              type={'semi'}
              isTouchable={false}
              fz={11}
            />
          </View>
        </View>
        {isMine ? <Done /> : isSelected ? <Done /> : <Plus />}
      </TouchableOpacity>
    );
  },
);
