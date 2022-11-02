import { useFetch, useModal, usePosts } from 'hooks';
import React, { useMemo, useState } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { HeaderHome } from './components/header';
import { CardItem } from './components/list';
import { apiRoutes, QUERYS } from 'constants/index';
import { palette } from 'theme';
import Spinner from 'react-native-spinkit';
import { AText, DrawerModal, PostModal, ProfileModal } from 'components';
export const HomeScreen = ({ navigation }: any) => {
  console.log('home');
  const [dataa, updateData] = useState([]);
  const { data, isLoading }: any = useFetch(QUERYS.feed, apiRoutes.feed);
  const { data: profilee }: any = useFetch(QUERYS.profile, apiRoutes.profile);
  const { profile, drawer } = useModal();
  usePosts(data, updateData);
  const Posts = useMemo(() => {
    return (
      <CardItem
        data={dataa?.slice(0, 20)}
        refreshing={isLoading}
        likedPosts={profilee}
        updateData={updateData}
        onRefresh={() => console.log('')}
      />
    );
  }, [isLoading, dataa, profilee]);

  const Loading = () => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: palette.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
          <Spinner
            isVisible={isLoading}
            size={60}
            type={'Circle'}
            style={{ alignSelf: 'center' }}
            color="#FFF"
          />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <AText
            style={{ color: palette.white, textAlign: 'center' }}
            children="Just a second"
            type={'reg'}
            isTouchable={false}
            fz={20}
          />
          <AText
            style={{
              color: palette.white,
              textAlign: 'center',
              opacity: 0.7,
              paddingTop: 20,
            }}
            children="We’re loading!"
            type={'reg'}
            isTouchable={false}
            fz={15}
          />
        </View>
      </SafeAreaView>
    );
  };
  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}>
      <HeaderHome navigation={navigation} />
      <ProfileModal isVis={profile} />
      <DrawerModal isVis={drawer} />
      {Posts}
      <PostModal />
    </SafeAreaView>
  );
};
