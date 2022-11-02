import { useFetch } from 'hooks';
import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { palette } from 'theme';
import { HeaderList } from '../communties-id/header';
import { FavList } from './list';
import { apiRoutes, QUERYS } from 'constants/index';
export const FavScreen = () => {
  const { data, isLoading } = useFetch(QUERYS.Fav, `${apiRoutes.mywishlist}`);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: palette.white,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
      }}>
      <HeaderList name={'Favorites'} />
      <FavList
        data={data}
        onRefresh={() => console.log('')}
        refreshing={isLoading}
      />
    </SafeAreaView>
  );
};
