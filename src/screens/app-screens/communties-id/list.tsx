import React, { memo } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

import { RenderItem } from './item';

interface Props {
  data: any;
  onRefresh: () => void;
  refreshing: boolean;
}
interface RenderItemProps {
  item: any;
  index: number;
}

export const CommunityList: React.FC<Props> = memo(props => {
  const renderItem = ({ item, index }: RenderItemProps) => {
    console.log('dola Clisr', item, index);

    return <RenderItem item={item} index={index} />;
  };
  console.log('aa');

  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          marginTop: 30,
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={props.data}
          removeClippedSubviews={true}
          contentContainerStyle={{}}
          initialNumToRender={10}
          refreshControl={
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }
          keyExtractor={(_, index) => `Communtiry_By_id-${index}`}
          renderItem={renderItem}
        />
      </View>
    </>
  );
});
