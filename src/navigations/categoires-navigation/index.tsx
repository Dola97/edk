import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommuntiesByCategories, ListScreen } from 'screens';
import { CategoiresParamsList } from '../parmas-list';
const CategoiresStack = createNativeStackNavigator<CategoiresParamsList>();

export const CategoiresStackScreen = () => {
  return (
    <CategoiresStack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false,
      }}>
      <CategoiresStack.Screen name="Categories" component={ListScreen} />
      <CategoiresStack.Screen
        name="CommunitiesListById"
        component={CommuntiesByCategories}
      />
    </CategoiresStack.Navigator>
  );
};
