import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackScreen } from '../auth-navigation/index';
import { InrestStackScreen } from '../intrest-navigation';
import { useApp, useUser } from 'hooks';
import {
  FavScreen,
  PostDetails,
  SpalshScreen,
  CreatePostScreen,
  CreateCommunity,
  InvitePeopleScreen,
  CommunityMain,
  EnrolledCourseScreen,
} from 'screens';

import { TabNavigatior } from '../bottom-navigation/bottom-nav';
import { ProfileStackScreen } from '../profile-navigation';
import { CourseStackScreen } from '../course-navigation';
import { CreateCommuntieStackScreen } from '../create-community';
import { DrawerNavLeft, DrawerNavRight } from '../drawerNav/drawerNavgatior';
import { CommuntiyStackScreen } from '../community-navigation';
const RootStack = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {
  const { isSplash } = useApp();
  const { token, choosedIntrest } = useUser();

  return (
    <RootStack.Navigator initialRouteName="Splash">
      {!isSplash && (
        <RootStack.Screen
          name="Splash"
          component={SpalshScreen}
          options={{
            headerShown: false,
          }}
        />
      )}

      {token ? (
        <>
          {choosedIntrest ? (
            <>
              <RootStack.Screen
                name="App"
                component={DrawerNavRight}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                name="Fav"
                component={FavScreen}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                name="Post"
                component={PostDetails}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                name="Course"
                component={CourseStackScreen}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                name="CreateCommunityStack"
                component={CreateCommuntieStackScreen}
                options={{
                  headerShown: false,
                }}
              />
            </>
          ) : (
            <RootStack.Screen
              name="IntrestStack"
              component={InrestStackScreen}
              options={{
                headerShown: false,
              }}
            />
          )}
        </>
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};
