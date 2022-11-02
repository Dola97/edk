import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommuntyScreen, IntrestScreen } from 'screens';
import { IntrestParamsList } from '../parmas-list';
const IntrestStack = createNativeStackNavigator<IntrestParamsList>();

export const InrestStackScreen = () => {
  return (
    <IntrestStack.Navigator
      initialRouteName="Intrest"
      screenOptions={{
        headerShown: false,
      }}>
      <IntrestStack.Screen name="Intrest" component={IntrestScreen} />
      <IntrestStack.Screen name="community" component={CommuntyScreen} />
    </IntrestStack.Navigator>
  );
};
