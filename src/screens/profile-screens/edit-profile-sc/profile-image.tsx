import { Edit } from 'constants/icons';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { RHeight, RWidth } from 'theme';

export const ProfileImage = () => {
  return (
    <>
      <ImageBackground
        source={{ uri: 'https://picsum.photos/200/300' }}
        imageStyle={{ borderRadius: 71 / 2 }}
        style={{
          width: RWidth(71),
          height: RHeight(71),
          marginHorizontal: 16,
          bottom: RHeight(30),
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            width: RWidth(24),
            height: RHeight(24),
            borderRadius: 24 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-end',
          }}>
          <Edit />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
