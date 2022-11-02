import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SearchScreen } from 'screens';
import { HomeStack } from '../parmas-list';
const HomeStackA = createNativeStackNavigator<HomeStack>();

export const HomeStackScreen = () => {
  return (
    <HomeStackA.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStackA.Screen name="Home" component={HomeScreen} />
      <HomeStackA.Screen name="search" component={SearchScreen} />
    </HomeStackA.Navigator>
  );
};
