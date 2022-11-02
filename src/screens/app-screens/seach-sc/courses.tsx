import { AText, CourseCard } from 'components';
import { useApp } from 'hooks';
import React from 'react';
import { ScrollView } from 'react-native';

export const CoursesSearch = ({ courses }) => {
  const { query } = useApp();
  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {courses?.length === 0 ? (
          <>
            <AText
              style={{ color: '#272727', marginHorizontal: 16 }}
              children={`No Result found for "${query}"`}
              type={'semi'}
              isTouchable={false}
              fz={14}
            />
          </>
        ) : (
          courses?.map((item, key) => (
            <React.Fragment key={`hello_ee_coureses_search${key}`}>
              <CourseCard
                img={'https://source.unsplash.com/random'}
                mainCategory={item?.category[0]?.name}
                prImg={'https://source.unsplash.com/random'}
                categorie={item?.category[0]?.name}
                name={item?.title}
                courseTime={item?.courseDuration?.$numberDecimal}
              />
            </React.Fragment>
          ))
        )}
      </ScrollView>
    </>
  );
};
