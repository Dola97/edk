import React from 'react';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useApp, useFetch } from 'hooks';
import { RHeight, width } from 'theme';
import { AText, ProfileInfo, ProfileLoader, ProfileTabs } from 'components';
import { Header } from './header';
import { apiRoutes, QUERYS } from 'constants/index';
import { useNavigation } from '@react-navigation/native';
export const ProfileScreen = () => {
  const { data, isLoading }: any = useFetch(
    QUERYS.myProfile,
    apiRoutes.myProfile,
  );
  const { navigate } = useNavigation();
  const { intrest, setIntrest } = useApp();
  const { data: followers, isLoading: pending }: any = useFetch(
    QUERYS.followers,
    apiRoutes.followers,
  );
  const { data: following, isLoading: pendingF }: any = useFetch(
    QUERYS.following,
    apiRoutes.following,
  );
  const { data: mycommunities, isLoading: pendingC }: any = useFetch(
    QUERYS.mycommunities,
    apiRoutes.mycommunities,
  );
  const { data: friends, isLoading: pnd }: any = useFetch(
    QUERYS.suggFriend,
    apiRoutes.friends,
  );

  // tron.logImportant('hahah', data, following, followers, mycommunities);
  if (isLoading) {
    return <ProfileLoader />;
  }
  const {
    name,
    biography,
    cityId,
    country,
    education,
    interests,
    jobTitle,
    coverPicture,
  } = data;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 35 : 0,
      }}>
      <Header />
      <ImageBackground
        source={{
          uri:
            coverPicture?.length === 0
              ? 'https://picsum.photos/200/300'
              : coverPicture,
        }}
        style={{
          width: width,
          height: RHeight(106),
          backgroundColor: '#0074E2',
          marginTop: 6,
        }}
        resizeMethod="resize"
        resizeMode="cover"
      />
      <ProfileInfo
        image={
          coverPicture?.length === 0
            ? 'https://picsum.photos/200/300'
            : coverPicture
        }
        name={name || ''}
        jobs={jobTitle || ''}
        following={following?.length}
        followers={followers?.length}
        communties={mycommunities?.length}
      />
      <ProfileTabs
        cover={coverPicture}
        biography={biography || ''}
        interests={interests || []}
        friends={friends}
      />
      <TouchableOpacity
        onPress={() => {
          navigate('choooseIntrest');

          interests.map(obj => {
            setIntrest(obj._id);
          });
        }}
        style={{
          backgroundColor: '#0074E2',
          borderRadius: 2,
          width: width / 1.1,
          alignSelf: 'center',
          height: RHeight(30),
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 40,
        }}>
        <AText
          style={{ color: '#fff' }}
          children="Edit Interests"
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
