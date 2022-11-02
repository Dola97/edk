import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../profile-sc/header';
import { Tabs } from './tabs';
import { apiRoutes, QUERYS } from 'constants/index';
import { useFetch } from 'hooks';
import tron from 'reactotron-react-native';
export const FProfileScreen = () => {
  const { data: followers }: any = useFetch(
    QUERYS.followers,
    apiRoutes.followers,
  );
  const { data: following }: any = useFetch(
    QUERYS.following,
    apiRoutes.following,
  );
  const { data: mycommunities }: any = useFetch(
    QUERYS.mycommunities,
    apiRoutes.mycommunities,
  );
  tron.log('ss', followers);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header />
      <Tabs
        followers={followers}
        following={following}
        mycommunities={mycommunities}
      />
    </SafeAreaView>
  );
};
