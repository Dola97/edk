import { useNavigation } from '@react-navigation/native';
import { Image, SearchBar } from '@rneui/base';
import { Back, BurgerMenu, Cancel, SearchIcon } from 'constants/icons';
import { useApp, useModal } from 'hooks';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts, height, RHeight, RWidth } from 'theme';

interface Props {
  updateSearch?: any;
  query?: any;
  onSubmitEditing?: () => any;
}
export const HeaderHome: React.FC<Props> = React.memo(props => {
  const { setModal } = useModal();
  const { navigate, goBack } = useNavigation();
  const _openMenu = () => {
    goBack();
  };
  const setQuery = useApp(state => state.setQuery);
  const [query, updateQuery] = useState('');

  const _handleSubmit = () => {
    setQuery(query);
    navigate('search', { query: query });
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <TouchableOpacity onPress={_openMenu}>
        <Back fill="#000" />
      </TouchableOpacity>
      <SearchBar
        onChangeText={updateQuery}
        value={query}
        onSubmitEditing={_handleSubmit}
        inputStyle={{
          color: '#272727',
          fontSize: RFValue(12, height),
          fontFamily: fonts.Semi,
        }}
        containerStyle={{
          borderTopWidth: 0,
          borderBottomWidth: 0,
          backgroundColor: '#fff',
        }}
        inputContainerStyle={{
          backgroundColor: '#ECECEC',
          width: RWidth(272),
          height: 32,
          borderRadius: 5,
        }}
        searchIcon={<SearchIcon />}
        clearIcon={
          props.query !== '' && (
            <TouchableOpacity onPress={() => props.updateSearch('')}>
              <Cancel fill="#919191" width={RWidth(12)} height={RHeight(12)} />
            </TouchableOpacity>
          )
        }
      />
      <TouchableOpacity
        onPress={() => setModal({ val: true, type: 'profile' })}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          containerStyle={{
            width: RWidth(35),
            height: RHeight(35),
            borderRadius: 35 / 2,
          }}
        />
      </TouchableOpacity>
    </View>
  );
});
