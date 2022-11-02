import { useModal } from 'hooks';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { palette } from 'theme';
import { ModalPostBody } from './modal-body';

export const PostModal: React.FC = () => {
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
        style={{ justifyContent: 'flex-end', margin: 16 }}
        animationOut={'slideOutDown'}
        animationOutTiming={1000}>
        <View
          style={{
            backgroundColor: palette.white,
            justifyContent: 'flex-start',

            borderRadius: 4,
            padding: 28,
          }}>
          <ModalPostBody closeModal={_handleClose} />
        </View>
      </Modal>
    </>
  );
};
