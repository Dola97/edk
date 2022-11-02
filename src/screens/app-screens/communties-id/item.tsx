import React from 'react';
import { RHeight, RWidth, width } from 'theme';
import { AText } from 'components';
import { TouchableOpacity, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useApp, useModal } from 'hooks';
import { Image } from '@rneui/base';
import { Done, Plus } from 'constants/icons';
export const RenderItem = ({ item }: any) => {
  //   const { navigate } = useNavigation();
  //   const { setModal } = useModal();
  //   const { setpost } = useApp();
  const isSelected = true;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isSelected ? '#DCECFB' : '#F8F8F8',
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
          source={{ uri: 'https://picsum.photos/200/300' }}
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
            children={item?.title}
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
            children={`${item?.description?.slice(0, 50)} ...`}
            type={'semi'}
            isTouchable={false}
            fz={11}
          />
        </View>
      </View>
      {isSelected ? <Done /> : <Plus />}
    </TouchableOpacity>
  );
};
