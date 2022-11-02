import { AText } from 'components/Text/Text';
import { CATEGORIES } from 'constants/index';
import { useApp } from 'hooks';
import React, { memo } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

export const CategoriesComponent = memo(() => {
  const { categorie, setCategorie } = useApp();
  console.log('ha');
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map((item, key) => {
          const isSelected = categorie.name === item.name;
          return (
            <TouchableOpacity
              style={{ marginTop: 6 }}
              key={`categories_keys_${key}`}>
              <AText
                style={{
                  marginHorizontal: 18,
                  color: isSelected ? '#0074E2' : '#212121',
                }}
                children={item.name}
                type={'semi'}
                pressText={() => setCategorie(item)}
                isTouchable={true}
                fz={13}
              />
              {isSelected && (
                <View
                  style={{
                    borderBottomColor: '#0074E2',
                    borderBottomWidth: 2,
                    marginTop: 6,
                    marginHorizontal: 22,
                  }}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
});
