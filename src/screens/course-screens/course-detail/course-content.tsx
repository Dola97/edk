import { CourseSections } from 'components';
import { apiRoutes, QUERYS } from 'constants/index';
import { useFetch } from 'hooks';
import React from 'react';

export const CourseContent = () => {
  const { data: sections, isLoading: pendingSections }: any = useFetch(
    QUERYS.courseContent,
    `${apiRoutes.courseSections}/Pnd_HwRaj`,
  );
  return (
    <>
      <CourseSections content={sections} isEnrolled={false} />
    </>
  );
};
