import { useNavigation } from '@react-navigation/native';
import { AText } from 'components';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RHeight, RWidth } from 'theme';

export const ItemCategoires = ({ data }: any) => {
  const { navigate } = useNavigation();
  const _handleNav = (categorie: any) => {
    navigate('CommunitiesListById', { categorie: categorie });
  };
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 12,
        flex: 1,
        flexWrap: 'wrap',
      }}>
      {data?.map((item: any, key: any) => (
        <TouchableOpacity
          onPress={() => _handleNav(item)}
          key={`hello_cate_home${key}`}>
          <ImageBackground
            style={{
              width: RWidth(161),
              height: RHeight(153),
              marginBottom: 16,
              overflow: 'hidden',
            }}
            imageStyle={{ borderRadius: 5, overflow: 'hidden' }}
            source={{
              uri: 'https://picsum.photos/200/300',
            }}>
            <LinearGradient
              colors={['#00000000', '#000000']}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                padding: 8,
              }}>
              <AText
                style={{ color: '#FFFFFF' }}
                children={item.englishName}
                type={'semi'}
                isTouchable={false}
                fz={14}
              />
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View>
  );
};
