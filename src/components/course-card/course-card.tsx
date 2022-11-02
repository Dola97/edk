import { Chip } from 'components/chip/chip';
import { AText } from 'components/Text/Text';
import React, { memo } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { RHeight, RWidth, width } from 'theme';

interface Props {
  img: any;
  mainCategory: any;
  prImg: any;
  categorie: any;
  name: any;
  chipName?: any;
  courseTime: number | undefined;
}
export const CourseCard: React.FC<Props> = memo(props => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}>
        <ImageBackground
          imageStyle={{ borderRadius: 5 }}
          source={{ uri: props.img }}
          style={{
            width: RWidth(343),
            height: RHeight(209),

            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: 16,
          }}>
          {props.chipName && <Chip color="#0064FE" name={props.chipName} />}
        </ImageBackground>
        <AText
          style={{ color: '#0074E2', marginVertical: 6 }}
          children={props.mainCategory}
          type={'reg'}
          isTouchable={false}
          fz={14}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <AText
            style={{ color: '#272727' }}
            children={`${props.categorie} - `}
            type={'semi'}
            isTouchable={false}
            fz={16}
          />
          <AText
            style={{ color: '#4E4E4E' }}
            children={props.courseTime}
            type={'reg'}
            isTouchable={false}
            fz={12}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={{ uri: props.prImg }}
            style={{
              width: RWidth(31),
              height: RHeight(31),
              borderRadius: 31 / 2,
              marginRight: 7,
            }}
          />
          <AText
            style={{ color: '#272727' }}
            children={props.name}
            type={'reg'}
            isTouchable={false}
            fz={12}
          />
        </View>
      </View>

      <View style={{ height: 12, backgroundColor: '#EBF1F3', width: width }} />
    </>
  );
});
