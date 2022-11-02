import { AText } from 'components/Text/Text';
import React, { memo } from 'react';
import { ImageBackground, TouchableOpacity, View, Image } from 'react-native';
import { RHeight, RWidth } from 'theme';

interface Props {
  bgm: any;
  title: any;
  content: string;
  memberCount: any;
  postCount: any;
}
export const CommuntiyCard: React.FC<Props> = memo(props => {
  return (
    <TouchableOpacity
      style={{
        width: RWidth(157),
        height: RHeight(135),
        backgroundColor: '#fff',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        marginHorizontal: 16,
      }}>
      <ImageBackground
        source={{ uri: props.bgm }}
        imageStyle={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
        style={{
          width: RWidth(157),
          height: RHeight(35),

          alignItems: 'center',
          justifyContent: 'center',
        }}
        resizeMethod="resize"
        resizeMode="center"
      />
      <Image
        style={{
          width: RWidth(47),
          height: RHeight(47),
          borderRadius: 47 / 2,
          alignSelf: 'center',
          position: 'absolute',
          top: 10,
        }}
        source={{ uri: props.bgm }}
      />
      <AText
        style={{ color: '#272727', textAlign: 'center', marginTop: 34 }}
        children={props.title}
        type={'semi'}
        isTouchable={false}
        fz={10}
      />
      <AText
        style={{ color: '#686868', marginTop: 2, textAlign: 'center' }}
        children={`${props.content.slice(0, 20)}...`}
        type={'semi'}
        isTouchable={false}
        fz={8}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 12,
        }}>
        <View>
          <AText
            style={{ color: '#272727', textAlign: 'center' }}
            children={props.memberCount}
            type={'semi'}
            isTouchable={false}
            fz={11}
          />
          <AText
            style={{ color: '#272727', textAlign: 'center' }}
            children="Members"
            type={'semi'}
            isTouchable={false}
            fz={11}
          />
        </View>
        <View>
          <AText
            style={{ color: '#272727', textAlign: 'center' }}
            children={props.postCount}
            type={'semi'}
            isTouchable={false}
            fz={11}
          />
          <AText
            style={{ color: '#272727', textAlign: 'center' }}
            children="Posts"
            type={'semi'}
            isTouchable={false}
            fz={11}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
});
