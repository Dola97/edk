import { Edit } from 'constants/icons';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { RHeight, RWidth, width } from 'theme';

export const Banner = () => {
  return (
    <>
      <ImageBackground
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={{
          width: width,
          height: RHeight(106),
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          padding: 16,
        }}
        resizeMethod="resize"
        resizeMode="cover">
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            width: RWidth(24),
            height: RHeight(24),
            borderRadius: 24 / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Edit />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
