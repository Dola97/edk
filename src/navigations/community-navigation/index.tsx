import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommunityMain } from 'screens';
import { CommuntiyParamsList } from '../parmas-list';
const CommuntiyStack = createNativeStackNavigator<CommuntiyParamsList>();

export const CommuntiyStackScreen = () => {
  return (
    <CommuntiyStack.Navigator
      initialRouteName="commDeatils"
      screenOptions={{
        headerShown: false,
      }}>
      <CommuntiyStack.Screen name="commDeatils" component={CommunityMain} />
    </CommuntiyStack.Navigator>
  );
};
