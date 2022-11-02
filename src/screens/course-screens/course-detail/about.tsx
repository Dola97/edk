import { AText } from 'components';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable-unmountable';
import RenderHtml from 'react-native-render-html';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts, height, width } from 'theme';
interface Props {
  about: string | undefined | any;
  allText: string | undefined | any;
}
export const AboutCourse: React.FC<Props> = ({ about, allText }) => {
  const [isShow, updateShow] = useState(false);
  return (
    <>
      <AText
        style={{ color: '#272727', marginTop: 24, marginHorizontal: 16 }}
        children="About this Course"
        type={'bold'}
        isTouchable={false}
        fz={16}
      />

      <RenderHtml
        baseStyle={{
          fontFamily: fonts.Reg,
          color: '#272727',
          fontSize: RFValue(12, height),
          marginHorizontal: 16,
          textAlign: 'left',
        }}
        contentWidth={width}
        source={about}
      />
      <AText
        style={{
          color: '#0074E2',
          textAlign: 'center',
          textDecorationLine: 'underline',
          display: isShow ? 'none' : 'flex',
        }}
        children="Show more"
        type={'reg'}
        isTouchable={true}
        pressText={() => updateShow(!isShow)}
        fz={14}
      />
      {isShow && (
        <Animatable.View
          unmountAnimation="fadeOut"
          animation="fadeIn"
          useNativeDriver>
          <RenderHtml
            baseStyle={{
              fontFamily: fonts.Reg,
              color: '#272727',
              fontSize: RFValue(12, height),
              marginHorizontal: 16,
              textAlign: 'left',
            }}
            contentWidth={width}
            source={allText}
          />
          <AText
            style={{
              color: '#0074E2',
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}
            children="Show less"
            type={'reg'}
            isTouchable={true}
            pressText={() => updateShow(!isShow)}
            fz={14}
          />
        </Animatable.View>
      )}
    </>
  );
};
