import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CourseScreen, EnrolledCourseScreen } from 'screens';
import { CourseParamsList } from '../parmas-list';
const CourseStack = createNativeStackNavigator<CourseParamsList>();

export const CourseStackScreen = () => {
  return (
    <CourseStack.Navigator
      initialRouteName="detailsCourse"
      screenOptions={{
        headerShown: false,
      }}>
      <CourseStack.Screen name="detailsCourse" component={CourseScreen} />
      <CourseStack.Screen
        name="enrolledCourse"
        component={EnrolledCourseScreen}
      />
    </CourseStack.Navigator>
  );
};
