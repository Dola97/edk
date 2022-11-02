import React from 'react';
import { CourseCard } from 'components';

export const RenderItem = ({ item }: any) => {
  return (
    <CourseCard
      img={'https://picsum.photos/200/300'}
      mainCategory={item?.title}
      prImg={'https://picsum.photos/200/300'}
      categorie={'Test'}
      name={'undefined'}
      chipName="Course"
      courseTime={item?.courseDuration?.$numberDecimal}
    />
  );
};
