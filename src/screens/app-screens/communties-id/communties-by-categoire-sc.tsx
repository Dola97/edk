import { useRoute } from '@react-navigation/native';
import { apiRoutes, QUERYS } from 'constants/index';
import { useFetch } from 'hooks';
import React from 'react';
import { ActivityIndicator, Platform, SafeAreaView } from 'react-native';
import { palette } from 'theme';
import { HeaderList } from './header';
import { CommunityList } from './list';

export const CommuntiesByCategories = () => {
  const { params } = useRoute();
  const { categorie }: any = params;
  const { data, isLoading } = useFetch(
    QUERYS.communtiesById,
    `${apiRoutes.communtiesById}/${categorie?._id}`,
  );
  console.log('item', categorie);
  if (isLoading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: palette.white,
          paddingTop: Platform.OS === 'android' ? 20 : 0,
        }}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: palette.white,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
      }}>
      <HeaderList name={categorie?.englishName} />
      <CommunityList
        data={data}
        onRefresh={() => console.log('')}
        refreshing={isLoading}
      />
    </SafeAreaView>
  );
};
