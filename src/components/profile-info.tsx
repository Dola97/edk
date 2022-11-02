import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

import { RHeight, RWidth } from 'theme';
import { AText } from './Text/Text';

interface Props {
  image: any;
  name: string | undefined;
  jobs: string[];
  following: number;
  followers: number;
  communties: number;
}

export const ProfileInfo: React.FC<Props> = memo(props => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 6,
        marginHorizontal: 16,
      }}>
      <View>
        <Image
          source={{ uri: props.image }}
          style={{
            width: RWidth(71),
            height: RHeight(71),
            borderRadius: 71 / 2,
            bottom: RHeight(30),
          }}
        />
        <AText
          style={{ color: '#000000', textTransform: 'capitalize' }}
          children={props.name}
          type={'reg'}
          isTouchable={false}
          fz={16}
        />

        <AText
          style={{ color: '#828282' }}
          children={` ${props.jobs} |`}
          type={'reg'}
          isTouchable={false}
          fz={12}
        />

        <TouchableOpacity
          onPress={() => navigate('followers')}
          style={{ flexDirection: 'row' }}>
          <AText
            style={{ color: '#0074E2' }}
            children={`Following ${props.following} - Followers ${props.followers} - Communities ${props.communties}`}
            type={'semi'}
            isTouchable={false}
            fz={12}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigate('edit')}
        style={{
          backgroundColor: '#0074E2',
          width: RWidth(91),
          height: RHeight(28),
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}>
        <AText
          style={{ color: '#FFFFFF' }}
          children={'Edit Profile'}
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
      </TouchableOpacity>
    </View>
  );
});
