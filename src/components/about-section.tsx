import { AText } from 'components';
import React from 'react';

interface Props {
  aboutText: string;
}
export const AboutSection: React.FC<Props> = ({ aboutText }) => {
  return (
    <>
      <AText
        style={{ color: '#4E4E4E', paddingTop: 12 }}
        children={'About'}
        type={'semi'}
        isTouchable={false}
        fz={14}
      />
      <AText
        style={{ color: '#4E4E4E', paddingTop: 10 }}
        children={aboutText}
        type={'reg'}
        isTouchable={false}
        fz={12}
      />
    </>
  );
};
