import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen, WelcomeScreen } from 'screens';
import { AuthParamsList } from '../parmas-list';
const AuthStack = createNativeStackNavigator<AuthParamsList>();

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="SignUp" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
