import { AText, CommuntiyCard } from 'components';
import React from 'react';
import { ScrollView, View } from 'react-native';

export const CommunitiesSearch = ({ filterdData }) => {
  return (
    <ScrollView horizontal>
      {filterdData?.map((item, key) => (
        <React.Fragment key={`hello_wold_Comuntires${key}`}>
          <View>
            <AText
              style={{ color: '#272727', marginHorizontal: 16 }}
              children={item.category[0]?.englishName}
              type={'bold'}
              isTouchable={false}
              fz={14}
            />
            {item?.intrests?.map((obj, i) => (
              <React.Fragment key={`hello_kcintrest${i}`}>
                <CommuntiyCard
                  bgm="https://source.unsplash.com/random"
                  title={obj.title}
                  content={obj.description}
                  memberCount={obj.users.length}
                  postCount={obj.posts.length}
                />
              </React.Fragment>
            ))}
          </View>
        </React.Fragment>
      ))}
    </ScrollView>
  );
};
