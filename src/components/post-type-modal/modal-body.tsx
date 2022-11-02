import { Divider } from '@rneui/base';
import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import { AText } from 'components/Text/Text';
import { Cancel, Report, Repost } from 'constants/icons';
import { useApp } from 'hooks';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { width } from 'theme';

export const ModalPostBody = ({ closeModal }: any) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={closeModal}>
          <Cancel fill="#000" />
        </TouchableOpacity>
        <AText
          style={{ color: '#272727' }}
          children={'Where To Post'}
          type={'semi'}
          isTouchable={false}
          fz={15}
        />
        <Cancel />
      </View>
      <Divider color="#707070" width={1} style={{ paddingTop: 10.2 }} />
      <AText
        style={{ color: '#272727', paddingTop: 30, marginHorizontal: 16 }}
        children={'Choose post location'}
        type={'semi'}
        isTouchable={false}
        fz={15}
      />
    </>
  );
};
