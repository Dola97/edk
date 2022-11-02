import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import { AText, UsersFollows } from 'components';
import { useApp, useUser } from 'hooks';
import React, { useCallback, useState } from 'react';
import { Alert, ScrollView, Share } from 'react-native';
import Toast from 'react-native-toast-message';
import tron from 'reactotron-react-native';
export const UsersSearch = ({ users }) => {
  const { query } = useApp();

  return (
    <>
      <ScrollView>
        {users?.length === 0 ? (
          <AText
            style={{ color: '#272727', marginHorizontal: 16 }}
            children={`No Result found for "${query}"`}
            type={'semi'}
            isTouchable={false}
            fz={14}
          />
        ) : (
          users?.map((item, key) => (
            <React.Fragment key={`hello_ee_users_search${key}`}>
              <UsersFollows
                bgm="https://source.unsplash.com/random"
                userName={item?.name}
                pressButton={() => console.log('')}
                isFollowed={false}
              />
            </React.Fragment>
          ))
        )}
      </ScrollView>
    </>
  );
};
