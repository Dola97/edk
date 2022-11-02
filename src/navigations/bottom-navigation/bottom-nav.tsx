import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabList } from '../parmas-list';
import {
  HomeAc,
  HomeNon,
  ChatNon,
  PlusAc,
  PlusNon,
  LayAc,
  LayNon,
  NotyAc,
  NotyNon,
} from 'constants/icons';
import { ChatScreen, AddScreen, MessagesScreen } from 'screens';
import { HomeStackScreen } from '../home-navigation';
import { CategoiresStackScreen } from '../categoires-navigation';
const Tabs = createBottomTabNavigator<BottomTabList>();

export const TabNavigatior = () => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeStack"
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 2,
          borderTopColor: '#FFFFFF',
          paddingHorizontal: 10,
          paddingTop: 20,
          height: 92,
        },

        unmountOnBlur: true,

        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'HomeStack' && focused) {
            return <HomeAc />;
          } else if (route.name === 'HomeStack') {
            return <HomeNon />;
          }
          if (route.name === 'CategoriesStack' && focused) {
            return <LayAc fill="#272727" />;
          } else if (route.name === 'CategoriesStack') {
            return <LayNon />;
          }
          if (route.name === 'add' && focused) {
            return <PlusAc />;
          } else if (route.name === 'add') {
            return <PlusNon />;
          }
          if (route.name === 'Chat' && focused) {
            return <ChatNon fill="#272727" />;
          } else if (route.name === 'Chat') {
            return <ChatNon />;
          }
          if (route.name === 'notification' && focused) {
            return <NotyAc fill="#272727" />;
          } else if (route.name === 'notification') {
            return <NotyNon />;
          }
        },
      })}>
      <Tabs.Screen name="HomeStack" component={HomeStackScreen} />
      <Tabs.Screen name="CategoriesStack" component={CategoiresStackScreen} />
      <Tabs.Screen name="add" component={AddScreen} />
      <Tabs.Screen name="Chat" component={ChatScreen} />
      <Tabs.Screen name="notification" component={MessagesScreen} />
    </Tabs.Navigator>
  );
};
