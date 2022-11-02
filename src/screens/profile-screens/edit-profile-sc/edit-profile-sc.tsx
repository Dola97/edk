import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from '../profile-sc/header';
import { Banner } from './banner';
import { FormProfile } from './form';
import { ProfileImage } from './profile-image';

export const EditProfile = () => {
  console.log('hahhahaha');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 35 : 0,
      }}>
      <Banner />
      <ProfileImage />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}>
        <FormProfile />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
