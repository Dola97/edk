import { useQuery } from '@tanstack/react-query';
import api from 'api/api';
import { AText, DrawerModal, ProfileModal } from 'components';
import { useModal } from 'hooks';
import React from 'react';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import { RHeight, RWidth } from 'theme';
import { HeaderHome } from '../home-sc/components/header';
import { ItemCategoires } from './item';

export const ListScreen = () => {
  const { profile, drawer } = useModal();

  const { data, isError, isLoading } = useQuery(
    ['intrest'],
    async () => {
      const res = await api.get('/api/categories');
      if (!res.ok) {
        throw res.data;
      } else {
        return res.data;
      }
    },
    {
      onError() {
        Toast.show({
          type: 'error',
          text1: 'General Error Please Try Again',
        });
      },
    },
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}>
      <HeaderHome />
      <ProfileModal isVis={profile} />
      <DrawerModal isVis={drawer} />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <ItemCategoires data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};
