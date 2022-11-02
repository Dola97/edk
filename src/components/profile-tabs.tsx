import { apiRoutes, QUERYS } from 'constants/index';
import { useApp, useFetch } from 'hooks';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CardItem } from 'screens/app-screens/home-sc/components/list';
import { RHeight, width } from 'theme';
import { AboutProfile } from './profile-about';
import { AText } from './Text/Text';

export const ProfileTabs = ({ cover, interests, biography, friends }: any) => {
  const { setTab, tabActive } = useApp();
  const { data: feed, isLoading: feedLoading }: any = useFetch(
    QUERYS.timeLine,
    apiRoutes.timeline,
  );
  const TABS = [
    {
      name: 'Feed',
    },
    {
      name: 'About',
    },
  ];
  // const { posts } = usePosts(feed);
  // const Posts = posts?.slice(0, 10).map(po => {
  //   return po;
  // });
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {TABS.map((tab, key) => {
          const isSelected = tab.name == tabActive;
          return (
            <TouchableOpacity
              onPress={() => setTab(tab.name)}
              key={`key_profile_Tab${key}`}
              style={{
                alignItems: 'center',
                width: width / 2.2,
                height: RHeight(31),
                justifyContent: 'center',
                alignSelf: 'center',

                backgroundColor: isSelected ? '#272727' : '#ECECEC',
              }}>
              <AText
                style={{ color: !isSelected ? '#272727' : '#fff' }}
                children={tab.name}
                type={'reg'}
                isTouchable={false}
                fz={14}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      {/* <View style={{ display: tabActive == 'Feed' ? 'flex' : 'none' }}> */}
      <CardItem
        data={feed}
        display={tabActive == 'Feed' ? 'flex' : 'none'}
        onRefresh={() => console.log('')}
        refreshing={feedLoading}
      />
      {/* </View> */}
      <View
        style={{ display: tabActive == 'About' ? 'flex' : 'none', flex: 1 }}>
        <AboutProfile
          biography={biography}
          interests={interests}
          cover={cover}
          friends={friends}
        />
      </View>
    </>
  );
};
