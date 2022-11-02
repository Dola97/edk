import { AText } from 'components';
import React, { Fragment, memo } from 'react';
import { ScrollView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { CommunityItem } from '../community-choose/community-item';
interface Props {
  data: any[];
  pressItem: (a: any) => any;
}
export const ItemCommunity: React.FC<Props> = memo(props => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      {props?.data?.map((item: any, key: any) => (
        <Animatable.View
          animation="fadeInUp"
          delay={key * 100}
          key={`intrest_key_${key}`}
          useNativeDriver
          style={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
              marginTop: 20,
            }}>
            <AText
              style={{ color: '#272727' }}
              children={item.category.englishName}
              type={'bold'}
              isTouchable={false}
              fz={14}
            />
            <AText
              style={{ color: '#272727' }}
              children="View more"
              type={'reg'}
              isTouchable={true}
              pressText={() => console.log()}
              fz={12}
            />
          </View>
          {item?.intrests?.map((cat: any, index: any) => (
            <Fragment key={`hello_world_com_Profke_mine_${index}`}>
              <CommunityItem
                pressItem={() => props.pressItem(cat)}
                txt={cat?.title}
                isMine={true}
                body={cat?.description}
              />
            </Fragment>
          ))}
        </Animatable.View>
      ))}
    </ScrollView>
  );
});
