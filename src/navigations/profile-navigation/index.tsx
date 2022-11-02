import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CommuntyChooseScreen,
  EditProfile,
  FProfileScreen,
  IntrestChooseScreen,
  ProfileScreen,
} from 'screens';
import { ProfileParamsList } from '../parmas-list';
const ProfileStack = createNativeStackNavigator<ProfileParamsList>();

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="profile" component={ProfileScreen} />
      <ProfileStack.Screen name="edit" component={EditProfile} />
      <ProfileStack.Screen name="followers" component={FProfileScreen} />
      <ProfileStack.Screen
        name="choooseIntrest"
        component={IntrestChooseScreen}
      />
      <ProfileStack.Screen name="chooseCom" component={CommuntyChooseScreen} />
    </ProfileStack.Navigator>
  );
};
