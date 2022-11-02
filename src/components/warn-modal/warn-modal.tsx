import { SubmitButton } from 'components/submit-button';
import { AText } from 'components/Text/Text';
import { WarnButton } from 'components/warn-button';
import { useModal } from 'hooks';
import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { RHeight } from 'theme';

interface Props {
  Warntext: string;
  isVis: boolean;
  press: () => void;
}
export const WarnModal: React.FC<Props> = ({ isVis, Warntext, press }) => {
  const { setModal } = useModal();
  const _closeModal = () => {
    setModal({ val: false, type: 'warn' });
  };
  return (
    <Modal
      animationIn={'slideInUp'}
      animationInTiming={1000}
      isVisible={isVis}
      style={{ justifyContent: 'flex-end', margin: 20 }}
      animationOut={'slideOutDown'}
      animationOutTiming={1000}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          borderRadius: 4,
          height: RHeight(142),
        }}>
        <AText
          style={{ color: '#272727', textAlign: 'center' }}
          children={Warntext}
          type={'reg'}
          isTouchable={false}
          fz={14}
        />
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 38,
            flexDirection: 'row',
            marginHorizontal: 16,
          }}>
          <SubmitButton onPress={_closeModal} />
          <WarnButton onPress={press} />
        </View>
      </View>
    </Modal>
  );
};
