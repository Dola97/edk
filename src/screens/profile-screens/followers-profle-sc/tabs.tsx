import { AText } from 'components';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ContnetProfile } from './content';
import { Followers } from './followers';
import { Following } from './following';
import { UserCommunites } from './user-communites';

export const Tabs = ({ followers, following, mycommunities }: any[]) => {
  const [selected, updateSelected] = useState('Following');
  const TABS = [
    {
      name: 'Following',
    },
    {
      name: 'Followers',
    },
    {
      name: 'Communities',
    },
  ];
  return (
    <>
      <View
        style={{
          backgroundColor: '#FBFBFB',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginVertical: 10,
          paddingVertical: 10,
        }}>
        {TABS.map((item, key) => {
          const isSelected = item.name == selected;
          return (
            <TouchableOpacity
              onPress={() => updateSelected(item.name)}
              key={`hellow_tabs_followes${key}`}>
              <AText
                style={{ color: isSelected ? '#0074E2' : '#000' }}
                children={item.name}
                type={'reg'}
                isTouchable={false}
                fz={12}
              />
              {isSelected ? (
                <View
                  style={{
                    borderBottomColor: '#0074E2',
                    borderBottomWidth: 2,
                    marginTop: 6,
                  }}
                />
              ) : (
                <View
                  style={{
                    marginTop: 6,
                  }}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ display: selected == 'Following' ? 'flex' : 'none' }}>
        <Following following={following} />
      </View>
      <View style={{ display: selected == 'Followers' ? 'flex' : 'none' }}>
        <Followers followers={followers} />
      </View>
      <View style={{ display: selected == 'Communities' ? 'flex' : 'none' }}>
        <UserCommunites communites={mycommunities} />
      </View>
    </>
  );
};
