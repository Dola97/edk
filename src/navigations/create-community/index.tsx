import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InvitePeopleScreen, CreateCommunity, CommunityMain } from 'screens';
import { CreateCommuntiyParamsList } from '../parmas-list';
const CreateCommuntieStack =
  createNativeStackNavigator<CreateCommuntiyParamsList>();

export const CreateCommuntieStackScreen = () => {
  return (
    <CreateCommuntieStack.Navigator
      initialRouteName="createCommunity"
      screenOptions={{
        headerShown: false,
      }}>
      <CreateCommuntieStack.Screen
        name="createCommunity"
        component={CreateCommunity}
      />
      <CreateCommuntieStack.Screen
        name="invitePeople"
        component={InvitePeopleScreen}
      />
      <CreateCommuntieStack.Screen
        name="communtiyMainScreen"
        component={CommunityMain}
      />
    </CreateCommuntieStack.Navigator>
  );
};
