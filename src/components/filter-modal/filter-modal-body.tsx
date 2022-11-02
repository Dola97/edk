import { CheckBox } from '@rneui/base';
import { useQuery } from '@tanstack/react-query';
import api from 'api/api';
import { AText } from 'components/Text/Text';
import { DownArrow } from 'constants/icons';
import { FILTER } from 'constants/index';
import { useApp } from 'hooks';
import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import Toast from 'react-native-toast-message';
import { fonts, RHeight, RWidth, width } from 'theme';

interface Props {}

export const FilterBody: React.FC<Props> = memo(() => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const { filterChoosed, setFilterChoosed } = useApp();
  const { data, isError, isLoading } = useQuery(
    ['intrest'],
    async () => {
      const res = await api.get('/api/categories');
      if (!res.ok) {
        throw res.data;
      } else {
        return res.data;
      }
    },
    {
      onError() {
        Toast.show({
          type: 'error',
          text1: 'General Error Please Try Again',
        });
      },
    },
  );
  return (
    <View style={{ paddingHorizontal: 16, flex: 1 }}>
      <AText
        style={{ color: '#272727', textAlign: 'left', paddingBottom: 10 }}
        children="Sort by Category"
        type={'semi'}
        isTouchable={false}
        fz={12}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {data?.map((item, key) => {
          return (
            <TouchableOpacity
              key={`ctageories_filter_${key}`}
              onPress={() => setFilterChoosed(item)}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: RWidth(18),
                  height: RHeight(18),
                  borderRadius: 18 / 2,
                  borderWidth: 1,
                  borderColor: '#000',
                  backgroundColor:
                    filterChoosed?.englishName == item?.englishName
                      ? '#000'
                      : undefined,
                }}
              />
              <AText
                style={{ color: '#272727', paddingLeft: 8 }}
                children={item?.englishName}
                type={'semi'}
                isTouchable={false}
                fz={12}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
});
