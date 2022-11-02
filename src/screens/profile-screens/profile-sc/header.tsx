import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/base';
import { Back } from 'constants/icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RHeight, RWidth } from 'theme';

interface Props {}
export const Header: React.FC<Props> = React.memo(() => {
  // const { query, setQuery } = useApp();
  //   const setQuery = useApp(state => state.setQuery);
  //   const [query, updateQuery] = useState('');
  const { goBack } = useNavigation();
  //   const _handleSubmit = () => {
  //     setQuery(query);
  //     // navigate('search', { query: query });
  //   };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <TouchableOpacity onPress={() => goBack()}>
        <Back fill="#000" />
      </TouchableOpacity>
      {/* <SearchBar
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
      /> */}

      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        containerStyle={{
          width: RWidth(35),
          height: RHeight(35),
          borderRadius: 35 / 2,
        }}
      />
    </View>
  );
});
