import { Cancel } from 'constants/icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { height } from 'theme';
import { FilterBody } from './filter-modal-body';

interface Props {
  isVis: any;
  closeModal: () => void;
}
export const FilterModal: React.FC<Props> = ({ isVis, closeModal }) => {
  return (
    <>
      <Modal
        animationIn={'slideInUp'}
        animationInTiming={1000}
        isVisible={isVis}
        style={{ justifyContent: 'flex-end', margin: 16 }}
        animationOut={'slideOutDown'}
        animationOutTiming={1000}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-start',
            borderRadius: 4,
            height: height / 2,
          }}>
          <TouchableOpacity
            style={{ marginTop: 20, padding: 16 }}
            onPress={closeModal}>
            <Cancel fill="#000" />
          </TouchableOpacity>

          <FilterBody />
        </View>
      </Modal>
    </>
  );
};
