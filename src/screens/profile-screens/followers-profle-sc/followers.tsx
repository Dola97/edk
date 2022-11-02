import { UsersFollows } from 'components';
import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';

export const Followers = ({ followers }: any) => {
  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {followers?.map((user, key) => {
          return (
            <Fragment key={`followers_user_${key}`}>
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
