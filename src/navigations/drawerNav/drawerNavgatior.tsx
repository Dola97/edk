import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamsList, DrawerParamsListLeft } from '../parmas-list';

import { DrawerContent } from './customDrawer';
import { TabNavigatior } from '../bottom-navigation/bottom-nav';
import { useWindowDimensions } from 'react-native';
import { styles } from './customDrawer/style';
import { RDrawerContent } from './customDrawer/Rdrawer-content';

const Drawer = createDrawerNavigator<DrawerParamsList>();
export const DrawerNavLeft = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName="bottomScreens"
      id="Drawer"
      screenOptions={{
        overlayColor: '0',
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerStyle: styles.drawerDiv,
        drawerPosition: 'left',
        unmountOnBlur: true,
        headerShown: false,
      }}
      backBehavior="none"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="bottomScreens" component={TabNavigatior} />
    </Drawer.Navigator>
  );
};
const RDrawer = createDrawerNavigator<DrawerParamsListLeft>();
export const DrawerNavRight = () => {
  const dimensions = useWindowDimensions();
  return (
    <RDrawer.Navigator
      initialRouteName="App"
      id="RDrawer"
      screenOptions={{
        overlayColor: '0',
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerStyle: styles.drawerDiv,
        drawerPosition: 'right',
        unmountOnBlur: true,
        headerShown: false,
      }}
      backBehavior="none"
      drawerContent={props => <RDrawerContent {...props} />}>
      <RDrawer.Screen name="App" component={DrawerNavLeft} />
    </RDrawer.Navigator>
  );
};
