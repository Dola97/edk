import { ListItem } from '@rneui/base';
import { AText } from 'components/Text/Text';
import { Down, Play } from 'constants/icons';
import React, { useState } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts, height, RHeight, RWidth } from 'theme';
interface Props {
  isEnrolled: boolean | undefined;
  content: any[];
}

export const CourseSections: React.FC<Props> = ({
  isEnrolled = false,
  content,
}) => {
  const [isExpanded, updateExpanded] = useState<any>();
  return (
    <>
      <AText
        style={{
          color: '#272727',
          textAlign: 'left',
          marginHorizontal: 16,
          marginTop: 28,
          marginBottom: 12,
        }}
        children="Course Content"
        type={'semi'}
        isTouchable={false}
        fz={16}
      />
      {content?.map((item, k) => (
        <ListItem.Accordion
          key={`course_conytent_${k}`}
          content={
            <>
              <ListItem.Content
                style={{
                  borderWidth: 1,
                  height: 34,
                  borderColor: '#707070',
                  paddingHorizontal: 16,
                }}>
                <ListItem.Title
                  style={{
                    fontSize: RFValue(12, height),
                    color: '#272727',
                    fontFamily: fonts.Semi,
                  }}>
                  {item?.title}
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={k == isExpanded ? true : false}
          expandIcon={<Down fill="#000" />}
          icon={<Down fill="#000" />}
          onPress={() => {
            k == isExpanded ? updateExpanded(undefined) : updateExpanded(k);
          }}>
          {item?.lessons.map((lesson: any, key: any) => (
            <ListItem
              key={`lessons_course${key}`}
              containerStyle={{ paddingTop: 0 }}>
              {isEnrolled ? (
                <View
                  style={{
                    width: RWidth(11),
                    height: RHeight(11),
                    borderRadius: 90,
                    borderColor: '#000000',
                    borderWidth: 1,
                  }}
                />
              ) : (
                <Play />
              )}
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    fontSize: RFValue(12, height),
                    fontFamily: fonts.Reg,
                    color: '#272727',
                  }}>
                  {lesson?.fileName}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </ListItem.Accordion>
      ))}
    </>
  );
};
