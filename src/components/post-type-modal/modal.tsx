import { useModal } from 'hooks';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import { height, palette, width } from 'theme';
import { ModalPostBody } from './modal-body';

export const TypePostModal: React.FC = () => {
  const { setModal, post } = useModal();
  const _handleClose = useCallback(() => {
    setModal({ type: 'post', val: false });
  }, [setModal]);
  return (
    <>
      <Modal
        animationIn={'slideInUp'}
        animationInTiming={1000}
        isVisible={post}
        style={{
          justifyContent: 'flex-start',
          margin: 0,
          width: width,
        }}
        animationOut={'slideOutDown'}
        animationOutTiming={1000}>
        <SafeAreaView
          style={{
            backgroundColor: palette.white,
            justifyContent: 'flex-start',
            flex: 1,
            borderRadius: 4,
            padding: 28,
          }}>
          <ModalPostBody closeModal={_handleClose} />
        </SafeAreaView>
      </Modal>
    </>
  );
};
