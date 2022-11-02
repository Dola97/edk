import { Button, Divider } from '@rneui/base';
import { AText } from 'components';
import { Back } from 'constants/icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import { width } from 'theme';
import { PolicyTxt } from './policy-txt';
import { PrivacyTxt } from './privacy-txt';

interface Props {
  isVis: boolean;
  closeModal: () => void;
}
export const PrivacyModal: React.FC<Props> = ({ isVis, closeModal }) => {
  const [isActive, updateActive] = useState(true);
  return (
    <>
      <Modal
        animationIn={'slideInUp'}
        animationInTiming={1000}
        isVisible={isVis}
        style={{ justifyContent: 'flex-start', margin: 0 }}
        animationOut={'slideOutDown'}
        animationOutTiming={1000}>
        <SafeAreaView
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity
            style={{ paddingHorizontal: 16, marginTop: 20 }}
            onPress={closeModal}>
            <Back fill="#0064fe" />
          </TouchableOpacity>
          <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <Button
              onPress={() => updateActive(true)}
              containerStyle={{ width: width, paddingHorizontal: 16 }}
              buttonStyle={{
                backgroundColor: isActive ? '#272727' : '#CECECE',
                borderRadius: 0,
                paddingVertical: 12,
                marginVertical: 12,
              }}>
              <AText
                style={{ color: isActive ? '#FFF' : '#000000' }}
                children="Privacy Policy"
                type={'bold'}
                isTouchable={false}
                fz={16}
              />
            </Button>
            <Button
              onPress={() => updateActive(false)}
              containerStyle={{ width: width, paddingHorizontal: 16 }}
              buttonStyle={{
                backgroundColor: !isActive ? '#272727' : '#CECECE',
                borderRadius: 0,
                paddingVertical: 12,
              }}>
              <AText
                style={{ color: !isActive ? '#FFF' : '#000000' }}
                children="Terms of Use"
                type={'bold'}
                isTouchable={false}
                fz={16}
              />
            </Button>
            <Divider
              style={{
                width: width / 1.1,
                paddingHorizontal: 16,
                alignSelf: 'center',
                marginVertical: 12,
              }}
              color="#707070"
            />
            {isActive ? (
              <Animatable.View
                useNativeDriver
                delay={1000 / 2}
                style={{ paddingHorizontal: 16 }}
                animation="fadeIn">
                <PrivacyTxt />
              </Animatable.View>
            ) : (
              <Animatable.View
                useNativeDriver
                delay={1000 / 2}
                style={{ paddingHorizontal: 16 }}
                animation="fadeIn">
                <PolicyTxt />
              </Animatable.View>
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};
