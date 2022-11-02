import { AText } from 'components';
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

export const FavList: React.FC<Props> = memo(props => {
  const renderItem = ({ item, index }: RenderItemProps) => {
    console.log('dola courese', item, index);

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
          ListHeaderComponent={() => (
            <AText
              style={{
                color: '#272727',
                marginHorizontal: 16,
                marginBottom: 20,
              }}
              children="Courses set as favorites"
              type={'semi'}
              isTouchable={false}
              fz={16}
            />
          )}
          ListEmptyComponent={() => {
            return (
              <AText
                style={{ color: '#272727' }}
                children={'No Data'}
                type={'bold'}
                isTouchable={false}
                fz={20}
              />
            );
          }}
          initialNumToRender={10}
          refreshControl={
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }
          keyExtractor={(_, index) => `Coourse_Fav_By_id-${index}`}
          renderItem={renderItem}
        />
      </View>
    </>
  );
});
