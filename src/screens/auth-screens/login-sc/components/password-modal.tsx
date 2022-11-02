import { Cancel } from 'constants/icons';
import { useApp } from 'hooks';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { height } from 'theme';
import { StepOne } from './pass-step-one';
import { StepTwo } from './pass-step-two';

interface Props {
  isVis: boolean;
  closeModal: () => void;
}
export const PasswordModal: React.FC<Props> = ({ isVis, closeModal }) => {
  const { passStep } = useApp();
  return (
    <>
      <Modal
        animationIn={'slideInUp'}
        animationInTiming={1000}
        isVisible={isVis}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        animationOut={'slideOutDown'}
        animationOutTiming={1000}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-start',
            borderRadius: 12,
            height: height / 1.2,
          }}>
          <TouchableOpacity
            style={{ marginTop: 20, padding: 16 }}
            onPress={closeModal}>
            <Cancel fill="#000" />
          </TouchableOpacity>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 20,
            }}>
            {passStep == 1 ? (
              <StepOne />
            ) : passStep == 2 ? (
              <StepTwo create={() => console.log('')} />
            ) : null}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};
