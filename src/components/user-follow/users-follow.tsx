import { Button } from '@rneui/base';
import { AText } from 'components/Text/Text';
import React, { memo } from 'react';
import { Image, View } from 'react-native';
import { RHeight, RWidth } from 'theme';

interface Props {
  bgm: any;
  userName: string;
  pressButton: () => void;
  isFollowed: boolean;
}
export const UsersFollows: React.FC<Props> = memo(props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 16,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: props.bgm }}
          style={{
            width: RWidth(34),
            height: RHeight(34),
            borderRadius: 34 / 2,
            marginRight: 5,
          }}
        />
        <AText
          style={{ color: '#272727' }}
          children={props.userName}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
      </View>
      <Button
        containerStyle={{
          width: RWidth(72),
          alignSelf: 'center',
        }}
        buttonStyle={{
          backgroundColor: '#0064FE',
          borderRadius: 3,
          paddingVertical: 7,
        }}
        onPress={props.pressButton}>
        <AText
          style={{ color: '#FFF' }}
          children={props.isFollowed ? 'Follow' : 'Unfollow'}
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
      </Button>
    </View>
  );
});
