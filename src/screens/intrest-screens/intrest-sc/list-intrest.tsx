import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-spinkit';
import * as Animatable from 'react-native-animatable';
import { IntrestItem } from './item';
import { palette } from 'theme';

interface Props {
  isLoading: any;
  data: any;
  _handleChoose: (a: any) => any;
  intrest: any;
}
export const ListIntrest: React.FC<Props> = ({
  isLoading,
  data,
  _handleChoose,
  intrest,
}) => {
  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 3,
            marginTop: 58,
          }}>
          <Spinner
            isVisible={isLoading}
            size={40}
            type={'Bounce'}
            style={{ alignSelf: 'center' }}
            color={palette.primary}
          />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flex: 3,
            flexWrap: 'wrap',
            marginTop: 58,
            paddingHorizontal: 16,
          }}>
          {data.map((item: any, key: any) => (
            <Animatable.View
              animation="fadeInUp"
              delay={key * 100}
              key={`intrest_key_${key}`}
              useNativeDriver
              style={{}}>
              <IntrestItem
                intrest={intrest}
                item={item}
                pressitem={() => _handleChoose(item)}
                txt={item.englishName}
              />
            </Animatable.View>
          ))}
        </View>
      )}
    </>
  );
};
