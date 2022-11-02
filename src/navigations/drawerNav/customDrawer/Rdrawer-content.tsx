import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { styles } from './style';
import { useUser } from 'hooks';

import { Fav, Logout, Profile } from 'constants/icons';

import { RHeight, RWidth } from 'theme';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AText } from 'components';
import { useNavigation } from '@react-navigation/native';

export const RDrawerContent = (props: any) => {
  const { logout, user } = useUser();
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
  const _logout = () => {
    setTimeout(async () => {
      logout();
      await AsyncStorage.removeItem('@accessToken');
    }, 1500);
  };
  const _handlePress = (route: any) => {
    navigate(route);
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* <HeaderDrawer onPress={() => props.navigation.toggleDrawer()} /> */}

          <View style={{}}>
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
                    item.name == 'Log out'
                      ? _logout()
                      : _handlePress(item.route)
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
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
