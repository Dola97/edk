import React from 'react';
import ContentLoader, { List } from 'react-content-loader/native';
import { SafeAreaView } from 'react-native';

export const ProfileLoader = () => {
  return (
    <SafeAreaView>
      <List backgroundColor="#828282" />
    </SafeAreaView>
  );
};
