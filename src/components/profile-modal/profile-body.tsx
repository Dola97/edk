import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AText } from 'components/Text/Text';
import { Fav, Logout, Profile } from 'constants/icons';
import { useModal, useUser } from 'hooks';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { RHeight, RWidth } from 'theme';

export const ProfileBody = () => {
  const { user, logout } = useUser();
  const { setModal } = useModal();
  const { navigate } = useNavigation();
  const ITEMS = [
    {
      name: 'My Profile',
      icon: <Profile />,
      route: 'Profile',
    },
    {
      name: 'Favorites',
      icon: <Fav />,
      route: 'Fav',
    },
    {
      name: 'Log out',
      icon: <Logout />,
    },
  ];
  const _handlePress = (route: any) => {
    setModal({ val: false, type: 'profile' });
    navigate(route);
  };
  const _logout = () => {
    setModal({ val: false, type: 'profile' });
    setTimeout(async () => {
      logout();
      await AsyncStorage.removeItem('@accessToken');
    }, 1500);
  };
  return (
    <>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={{
          width: RWidth(71),
          height: RHeight(71),
          borderRadius: 71 / 2,
          alignSelf: 'center',
          marginTop: 28,
        }}
      />
      <AText
        style={{ color: '#000000', textAlign: 'center', marginTop: 12 }}
        children={user?.name}
        type={'reg'}
        isTouchable={false}
        fz={15}
      />
      <View style={{ marginTop: 60, marginHorizontal: 14 }}>
        {ITEMS.map((item, key) => (
          <TouchableOpacity
            onPress={() =>
              item.name == 'Log out' ? _logout() : _handlePress(item.route)
            }
            key={`keys_profile_menu${key}`}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: 32,
            }}>
            {item.icon}
            <AText
              style={{ color: '#272727', paddingLeft: 12 }}
              children={item.name}
              type={'semi'}
              isTouchable={false}
              fz={12}
            />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};
