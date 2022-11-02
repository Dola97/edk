import { AText, WarnButton } from 'components';
import { Globe, Person } from 'constants/icons';
import React from 'react';
import { View } from 'react-native';
interface Props {
  courseName: string | undefined;
  courseTime: number | undefined;
  createBy: string | undefined;
  categorie: string | undefined;
  lang: string | undefined;
  enrolledPersons: number | undefined;
}
export const CourseInfo: React.FC<Props> = ({
  courseName,
  courseTime,
  categorie,
  createBy,
  lang,
  enrolledPersons,
}) => {
  return (
    <View style={{ marginHorizontal: 16 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginVertical: 8,
        }}>
        <AText
          style={{ color: '#272727' }}
          children={`${courseName} - `}
          type={'semi'}
          isTouchable={false}
          fz={16}
        />
        <AText
          style={{ color: '#4E4E4E' }}
          children={courseTime}
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
      </View>
      <AText
        style={{ color: '#272727' }}
        children={`Created by ${createBy}`}
        type={'reg'}
        isTouchable={false}
        fz={12}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 8,
          marginBottom: 18,
        }}>
        <WarnButton
          bg="#FFA319"
          width={80}
          disabled={true}
          onPress={undefined}
          txt={categorie}
        />
        <AText
          style={{
            color: '#0074E2',
            paddingLeft: 5,
            textDecorationLine: 'underline',
          }}
          children={`Discover more in ${categorie}`}
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 8,
        }}>
        <Globe style={{ marginRight: 8.4 }} />
        <AText
          style={{ color: '#272727', marginRight: 21 }}
          children={lang}
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
        <Person style={{ marginRight: 8.4 }} />
        <AText
          style={{ color: '#272727' }}
          children={enrolledPersons}
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
      </View>
    </View>
  );
};
