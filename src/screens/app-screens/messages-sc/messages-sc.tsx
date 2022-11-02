import { useQuery } from '@tanstack/react-query';
import api from 'api/api';
import { AText } from 'components';
import { EmptyNofit } from 'constants/icons';
import React from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import Toast from 'react-native-toast-message';
import tron from 'reactotron-react-native';
export const MessagesScreen = () => {
  const { data, isError, isLoading } = useQuery(
    ['notifications'],
    async () => {
      const res = await api.get('/api/mynotifications');
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
  tron.log('data', data);
  if (data?.length === 0) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingTop: Platform.OS === 'android' ? 35 : 0,
        }}>
        <View style={{ flex: 1 }}>
          <AText
            style={{ color: '#272727', textAlign: 'center' }}
            children="Notifications"
            type={'semi'}
            isTouchable={false}
            fz={16}
          />
        </View>
        <View style={{ flex: 3, alignItems: 'center' }}>
          <AText
            style={{ color: '#272727', textAlign: 'center', paddingBottom: 8 }}
            children="You have no notifications at this moment"
            type={'semi'}
            isTouchable={false}
            fz={25}
          />
          <EmptyNofit />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <AText
        style={{ color: '#272727', textAlign: 'center' }}
        children="Notifications"
        type={'semi'}
        isTouchable={false}
        fz={16}
      />
    </SafeAreaView>
  );
};
