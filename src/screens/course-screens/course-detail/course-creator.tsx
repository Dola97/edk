import { AText } from 'components';
import React from 'react';
import { Image, View } from 'react-native';
import { RHeight, RWidth } from 'theme';

interface Props {
  name: string | undefined;
  jobs: string | undefined;
  creatorInfo: string | undefined;
}
export const CourseCreator: React.FC<Props> = ({ name, jobs, creatorInfo }) => {
  return (
    <>
      <AText
        style={{
          color: '#272727',
          marginHorizontal: 16,
          paddingTop: 20,
          paddingBottom: 13,
        }}
        children="Course Creator"
        type={'semi'}
        isTouchable={false}
        fz={16}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{
            width: RWidth(60),
            height: RHeight(60),
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#FFFFFF',
          }}
        />
        <View style={{ marginLeft: 7 }}>
          <AText
            style={{ color: '#272727' }}
            children={name}
            type={'semi'}
            isTouchable={false}
            fz={12}
          />
          <AText
            style={{ color: '#4E4E4E', paddingTop: 4 }}
            children={jobs}
            type={'semi'}
            isTouchable={false}
            fz={10}
          />
        </View>
      </View>
      <AText
        style={{
          color: '#272727',
          marginHorizontal: 16,
          textAlign: 'left',
          paddingVertical: 10,
        }}
        children={creatorInfo}
        type={'reg'}
        isTouchable={false}
        fz={12}
      />
    </>
  );
};
