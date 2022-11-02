import { Back } from 'constants/icons';
import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { palette } from 'theme';
import { CourseContent } from '../course-detail/course-content';
import { CourseInfo } from '../course-detail/course-info';
import { PlaceHolder } from '../course-detail/placeholder';

export const EnrolledCourseScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.white }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <TouchableOpacity style={{ marginTop: 20, marginHorizontal: 16 }}>
          <Back fill="#000" />
        </TouchableOpacity>
        <PlaceHolder />
        <CourseInfo
          courseName={'course?.title'}
          courseTime={2}
          createBy={'course?.eductorId?.name'}
          categorie={'course?.category?.name'}
          lang={'course?.language'}
          enrolledPersons={2}
        />
        <CourseContent />
      </ScrollView>
    </SafeAreaView>
  );
};
