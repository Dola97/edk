import { Divider } from '@rneui/base';
import { Check } from 'constants/icons';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { AboutSection } from './about-section';
import { IntrestSection } from './intrest-section';
import { SuggestedFrinds } from './suggested-section';
import { AText } from './Text/Text';

export const AboutProfile = ({ cover, interests, biography, friends }: any) => {
  const Settings = [
    {
      name: 'Upload a picture so people can recognize you',
      check: cover?.length === 0 ? false : true,
    },
    {
      name: 'Upload a banner to customize your profile',
      check: cover?.length === 0 ? false : true,
    },
  ];
  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20, marginHorizontal: 16 }}>
        <AText
          style={{ color: '#4E4E4E', paddingBottom: 12, paddingTop: 19 }}
          children={'Complete your Profile'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />

        {Settings.map((op, key) => (
          <React.Fragment key={`op_settings_${key}`}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <AText
                style={{ color: '#4E4E4E', paddingBottom: 12 }}
                children={op.name}
                type={'reg'}
                isTouchable={false}
                fz={12}
              />
              <Check fill={op.check ? '#2EA12A' : '#828282'} />
            </View>
          </React.Fragment>
        ))}
        <Divider style={{ paddingTop: 5 }} />
        <AboutSection aboutText={biography} />
        <Divider style={{ paddingTop: 8 }} />
        <IntrestSection intrest={interests} />
        <Divider style={{ paddingTop: 8 }} />
        <SuggestedFrinds suggested={friends} />
      </ScrollView>
    </>
  );
};
