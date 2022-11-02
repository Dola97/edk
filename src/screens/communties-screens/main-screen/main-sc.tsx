import { Divider } from '@rneui/base';
import { AText } from 'components';
import { EmptyFeed, Settings } from 'constants/icons';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { RHeight, RWidth, width } from 'theme';

export const CommunityMain = () => {
  const [active, updateActive] = useState('Feed');
  const TABS = [
    {
      name: 'Feed',
    },
    {
      name: 'Courses',
    },
    {
      name: 'Media',
    },
    {
      name: 'Members',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ImageBackground
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
        style={{
          width: width,
          height: RHeight(138),
          backgroundColor: '#0074E2',
          marginTop: 6,
          flexDirection: 'row',
          paddingLeft: 16,
          paddingBottom: 11,
        }}
        resizeMethod="resize"
        resizeMode="cover">
        <TouchableOpacity style={{ position: 'absolute', right: 16, top: 10 }}>
          <Settings />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{
            width: RWidth(84),
            height: RHeight(77),
            alignSelf: 'flex-end',
            borderRadius: 5,
          }}
        />
      </ImageBackground>
      <AText
        style={{ color: '#272727', paddingLeft: 16, paddingVertical: 7 }}
        children={'name of communties'}
        type={'bold'}
        isTouchable={false}
        fz={14}
      />
      <AText
        style={{ color: '#272727', paddingHorizontal: 16, paddingVertical: 7 }}
        children={
          'CThe first user flow diagramming software for design and product teams. Present your design ideas with interactive user flow diagrams and flowcharts'
        }
        type={'reg'}
        isTouchable={false}
        fz={12}
      />
      <View
        style={{
          backgroundColor: '#F6F6F6',
          width: width,
          height: RHeight(32),
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {TABS.map((item, key) => {
          const isSelected = item.name === active;
          return (
            <TouchableOpacity
              onPress={() => updateActive(item.name)}
              key={`hello_Tans${key}`}>
              <AText
                style={{ color: isSelected ? '#0074E2' : '#090909' }}
                children={item.name}
                type={'reg'}
                isTouchable={false}
                fz={12}
              />
              {isSelected && (
                <Divider color="#0074E2" width={2} style={{ top: 8 }} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ alignItems: 'center' }}>
        <EmptyFeed />
        <AText
          style={{ color: '#272727' }}
          children={'Be the first one to post in this Community'}
          type={'light'}
          isTouchable={false}
          fz={16}
        />
      </View>
    </SafeAreaView>
  );
};
