import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RHeight, RWidth, width } from 'theme';
import { AText } from './Text/Text';

interface Props {
  intrest: any[];
}
export const IntrestSection: React.FC<Props> = ({ intrest }) => {
  return (
    <>
      <AText
        style={{ color: '#4E4E4E', paddingTop: 12 }}
        children={'My Interests'}
        type={'semi'}
        isTouchable={false}
        fz={14}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 18 }}>
        {intrest.map((item, key) => (
          <TouchableOpacity
            key={`key_intrewts_Profile_${key}`}
            style={{
              backgroundColor: '#272727',
              borderRadius: 2,
              alignItems: 'center',
              justifyContent: 'center',
              width: RWidth(97),
              height: RHeight(40),
              marginRight: 12,
              marginBottom: 12,
            }}>
            <AText
              style={{ color: '#fff' }}
              children={item.englishName}
              type={'reg'}
              isTouchable={false}
              fz={12}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};
