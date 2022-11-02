import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { palette } from 'theme';
import { CourseInfo } from './course-info';
import { PlaceHolder } from './placeholder';
import { Buttons } from './buttons';
import { AboutCourse } from './about';
import { useNavigation } from '@react-navigation/native';
import { apiRoutes, QUERYS } from 'constants/index';
import { Back } from 'constants/icons';
import { useFetch, useIsFav } from 'hooks';
import { CourseContent } from './course-content';
import { CourseObjectives } from './course-objectives';
import { CourseCreator } from './course-creator';

export const CourseScreen = () => {
  const { goBack } = useNavigation();
  const _Back = () => {
    goBack();
  };
  const { data: info, isLoading }: any = useFetch(
    QUERYS.coureseInfo,
    `${apiRoutes.coureseInfo}/Pnd_HwRaj`,
  );

  const { data: listFav, isLoading: pending } = useFetch(
    QUERYS.Fav,
    `${apiRoutes.mywishlist}`,
  );

  const course = (info ?? [])[0];
  const descrption: string = course?.description || '';
  const description = {
    html: `${descrption?.slice(0, 300)}`,
  };
  const Alldescription = {
    html: `${descrption?.slice(300)}`,
  };
  const { isFav } = useIsFav(listFav, course?._id);
  const objectives = course?.objectives || [];
  const creatorInfo = course?.eductorId || {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.white }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <TouchableOpacity
          style={{ marginTop: 20, marginHorizontal: 16 }}
          onPress={_Back}>
          <Back fill="#000" />
        </TouchableOpacity>
        <PlaceHolder />
        <CourseInfo
          courseName={course?.title}
          courseTime={course?.courseDuration?.$numberDecimal}
          createBy={course?.eductorId?.name}
          categorie={course?.category?.name}
          lang={course?.language}
          enrolledPersons={course?.accessCount}
        />
        <Buttons isFav={isFav} />
        <AboutCourse allText={Alldescription} about={description} />
        <CourseContent />
        <CourseObjectives objectives={objectives} />
        <CourseCreator
          name={creatorInfo?.name}
          jobs={'Test | Test | Test '}
          creatorInfo={
            'TESTETSTESTETSTETSTETSTETSTETSTETSTETSTETSTETSTETSTETSTETSTETSTETSTETSTETSTETETSTTETE'
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
