import { useModal } from 'hooks';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import { height } from 'theme';
import { ProfileBody } from './profile-body';
interface Props {
  isVis: boolean;
}
export const ProfileModal: React.FC<Props> = ({ isVis }) => {
  const { setModal } = useModal();
  const _closeModal = () => {
    setModal({ val: false, type: 'profile' });
  };
  return (
    <>
      <Modal
        animationIn={'slideInRight'}
        animationInTiming={1000 / 2}
        useNativeDriver
        isVisible={isVis}
        onBackdropPress={_closeModal}
        style={{
          justifyContent: 'flex-start',
          alignSelf: 'flex-end',
          margin: 0,
          width: 200,
        }}
        animationOut={'slideOutRight'}
        animationOutTiming={1000 / 4}>
        <SafeAreaView
          style={{
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-start',
            height: height,
          }}>
          <ProfileBody />
        </SafeAreaView>
      </Modal>
    </>
  );
};
