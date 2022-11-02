import { AText } from 'components';
import { Filter as Fi } from 'constants/icons';
import { useModal } from 'hooks';
import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

export const Filter = memo(() => {
  const { setModal } = useModal();
  return (
    <>
      <TouchableOpacity
        onPress={() => setModal({ type: 'filter', val: true })}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          padding: 16,
        }}>
        <Fi fill="#000" />
        <AText
          style={{ color: '#363636', marginLeft: 6 }}
          children="Filter"
          type={'semi'}
          isTouchable={false}
          fz={12}
        />
      </TouchableOpacity>
    </>
  );
});
