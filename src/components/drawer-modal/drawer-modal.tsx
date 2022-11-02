import { useModal } from 'hooks';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { height } from 'theme';
import { DrawerBody } from './body';
interface Props {
  isVis: boolean;
}
export const DrawerModal: React.FC<Props> = ({ isVis }) => {
  const { setModal } = useModal();
  const _closeModal = () => {
    setModal({ val: false, type: 'drawer' });
  };
  return (
    <>
      <Modal
        animationIn={'slideInLeft'}
        animationInTiming={1000 / 2}
        isVisible={isVis}
        useNativeDriver
        onBackdropPress={_closeModal}
        style={{
          justifyContent: 'flex-start',
          alignSelf: 'flex-start',
          margin: 0,
          width: 220,
        }}
        animationOut={'slideOutLeft'}
        animationOutTiming={1000 / 4}>
        <SafeAreaView
          style={{
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-start',
            height: height,
          }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <DrawerBody />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};
