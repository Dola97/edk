import { UsersFollows } from 'components';
import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';

export const Following = ({ following }: any) => {
  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {following?.map((user, key) => {
          return (
            <Fragment key={`following_user_${key}`}>
              <UsersFollows
                bgm="https://picsum.photos/200/300"
                userName={'need Name'}
                pressButton={() => console.log('')}
                isFollowed={false}
              />
            </Fragment>
          );
        })}
      </ScrollView>
    </>
  );
};
