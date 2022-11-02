import React, { memo } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { RenderItem } from './render_item';

interface Props {
  data: any;
  onRefresh: () => void;
  refreshing: boolean;
  display?: any;
  likedPosts: any[];
  updateData: any;
}
interface RenderItemProps {
  item: any;
  index: number;
}

export const CardItem: React.FC<Props> = memo(props => {
  const renderItem = ({ item, index }: RenderItemProps) => {
    console.log('dola', item, index);

    return (
      <RenderItem
        likedPosts={props?.likedPosts || []}
        item={item}
        index={index}
        data={props.data}
        updateData={props.updateData}
      />
    );
  };
  console.log('aa');
  const { display = 'flex' } = props;
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          display: display,
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={props.data}
          removeClippedSubviews={true}
          contentContainerStyle={{}}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          refreshControl={
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }
          keyExtractor={(_, index) => `post-${index}`}
          renderItem={renderItem}
        />
      </View>
    </>
  );
});
