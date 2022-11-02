import { AText, Card } from 'components';
import React, { useCallback, useMemo } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { width } from 'theme';
import * as Animatable from 'react-native-animatable';
import { Divider } from '@rneui/base';

interface Props {
  data: any;

  likeButton: () => void;
  pressCard: (item: any) => void;
  onRefresh: () => void;
  endReached: () => void;
  refreshing: boolean;
}
interface RenderItemProps {
  item: any;
  index: number;
}

export const RecomendedList: React.FC<Props> = React.memo(props => {
  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    console.log('ii', item, index);
    return (
      <Animatable.View animation="fadeInUp" delay={index * 200} useNativeDriver>
        <Card
          bg="#FFF"
          imgSrc={item.prof}
          isPersonal={item.isPersonal}
          title={item.title}
          pressShare={() => console.log('item', item)}
          by={item.by}
          placeImg={item.image}
          desc={item?.desc}
          time={item.time}
          isLiked={item.Liked}
          likes={item.likenumber}
          comments={item.comment}
          pressMenu={function (): void {
            throw new Error('Function not implemented.');
          }}
          Join={function (): void {
            throw new Error('Function not implemented.');
          }}
          isRecomended={true}
        />

        <View
          style={{ height: 12, backgroundColor: '#EBF1F3', width: width }}
        />
      </Animatable.View>
    );
  }, []);
  const Header = useMemo(() => {
    return (
      <>
        <AText
          style={{ color: '#313131' }}
          children="Recommended"
          type={'semi'}
          isTouchable={false}
          fz={10}
        />
        <Divider />
      </>
    );
  }, []);
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={props.data}
          removeClippedSubviews={true}
          contentContainerStyle={{}}
          onEndReached={props.endReached}
          ListHeaderComponent={Header}
          refreshControl={
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }
          keyExtractor={index => index}
          renderItem={renderItem}
        />
      </View>
    </>
  );
});
