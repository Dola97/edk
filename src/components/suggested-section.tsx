import React, { Fragment } from 'react';
import { AText } from './Text/Text';
import { UsersFollows } from './user-follow/users-follow';

export const SuggestedFrinds = ({ suggested }) => {
  return (
    <>
      <AText
        style={{ color: '#4E4E4E', marginHorizontal: 16, marginTop: 19 }}
        children="Suggested Users"
        type={'semi'}
        isTouchable={false}
        fz={14}
      />
      {suggested?.slice(0, 12)?.map((user, key) => {
        return (
          <Fragment key={`Suggested_frinds${key}`}>
            <UsersFollows
              bgm="https://picsum.photos/200/300"
              userName={user.name}
              pressButton={function (): void {
                throw new Error('Function not implemented.');
              }}
              isFollowed={true}
            />
          </Fragment>
        );
      })}
    </>
  );
};
