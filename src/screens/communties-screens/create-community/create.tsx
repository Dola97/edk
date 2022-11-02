import { AText, Input } from 'components';
import { Back, Plus } from 'constants/icons';
import React, { useState } from 'react';
import { pickImage } from '../../../util';
import { useForm } from 'react-hook-form';
import tron from 'reactotron-react-native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { styleAuth } from 'screens/auth-screens/reg-sc/styles';
import { width } from 'theme';
import SelectDropdown from 'react-native-select-dropdown';
import { useQuery } from '@tanstack/react-query';
import { QUERYS } from 'constants/index';
import Toast from 'react-native-toast-message';
import { apiRoutes } from 'constants/index';
import api from 'api/api';
import { Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

export const CreateCommunity = () => {
  const { control } = useForm();
  const { navigate } = useNavigation();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const [banner, setBanner] = useState<any>({});
  const [photo, setPhoto] = useState<any>({});
  const { data, isError, isLoading } = useQuery(
    [QUERYS.intrest],
    async () => {
      const res = await api.get(apiRoutes.intrest);
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
  tron.log('data', data);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <Back fill="#000" />
        <AText
          style={{ color: '#272727' }}
          children={'Create a Community'}
          type={'semi'}
          isTouchable={false}
          fz={16}
        />
        <Back />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <AText
          style={{ color: '#272727', paddingHorizontal: 16, paddingTop: 30 }}
          children={'Add a Community Banner Image'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
        <AText
          style={{ color: '#4E4E4E', paddingHorizontal: 16, paddingTop: 2 }}
          children={
            'Decorate your community with a personalized banner of your choice'
          }
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
        <AText
          style={{ color: '#272727', paddingHorizontal: 16, paddingTop: 11 }}
          children={'Community Banner Image'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
        <TouchableOpacity
          onPress={() => pickImage(setBanner, () => console.log(''))}
          style={{
            backgroundColor: '#272727',
            width: width / 1.1,
            height: 167,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}>
          {banner.uri ? (
            <Image
              // style={authStyles.imageStyle}
              style={{ width: width / 1.1, height: 167, borderRadius: 10 }}
              source={{ uri: banner.uri }}
              resizeMode="cover"
            />
          ) : (
            <Plus fill="#000" />
          )}
        </TouchableOpacity>
        <AText
          style={{ color: '#272727', paddingTop: 29, paddingHorizontal: 16 }}
          children={'Community name'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
        <Input
          name="name"
          renderErrorMessage={false}
          errorStyle={styleAuth.error}
          control={control}
          inputContainerStyle={{
            ...styleAuth.inputC,
            paddingVertical: 7,
            borderColor: '#CDD4D9',
          }}
          containerStyle={{ marginTop: 11 }}
          inputStyle={{ ...styleAuth.input }}
          isPassword={false}
          labelStyle={styleAuth.label}
          rules={{
            required: 'Name Required',
          }}
        />
        <AText
          style={{ color: '#272727', paddingHorizontal: 16, paddingTop: 30 }}
          children={'Add a Community Photo'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
        <AText
          style={{ color: '#4E4E4E', paddingHorizontal: 16, paddingTop: 2 }}
          children={
            'Give users an idea of what your community is about with a  photo.'
          }
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
        <TouchableOpacity
          onPress={() => pickImage(setPhoto, () => console.log(''))}
          style={{
            backgroundColor: '#272727',
            width: 157,
            height: 157,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 157 / 2,
            marginTop: 11,
          }}>
          {photo.uri ? (
            <Image
              // style={authStyles.imageStyle}
              style={{ width: 157, height: 157, borderRadius: 157 / 2 }}
              source={{ uri: photo.uri }}
              resizeMode="cover"
            />
          ) : (
            <Plus fill="#000" />
          )}
        </TouchableOpacity>
        <AText
          style={{ color: '#272727', paddingTop: 29, paddingHorizontal: 16 }}
          children={'Community Descrption'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
        <Input
          name="desc"
          renderErrorMessage={false}
          errorStyle={styleAuth.error}
          control={control}
          inputContainerStyle={{
            ...styleAuth.inputC,
            paddingVertical: 7,
            borderColor: '#CDD4D9',
          }}
          containerStyle={{ marginTop: 11 }}
          inputStyle={{ ...styleAuth.input }}
          isPassword={false}
          labelStyle={styleAuth.label}
          rules={{
            required: 'Name Required',
          }}
        />
        <AText
          style={{
            color: '#272727',
            paddingTop: 29,
            paddingHorizontal: 16,
            marginBottom: 10,
          }}
          children={'Community category'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
        <SelectDropdown
          data={data}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem?.englishName;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item?.englishName;
          }}
          buttonStyle={{
            ...styleAuth.inputC,
            width: width / 1.09,
            borderColor: '#CDD4D9',
            backgroundColor: 'white',
          }}
        />
      </ScrollView>
      <Button
        onPress={() => navigate('invitePeople')}
        disabled={false}
        loading={false}
        disabledStyle={{ opacity: 0.5 }}
        containerStyle={{
          width: width,
          paddingHorizontal: 22,
          alignSelf: 'center',
        }}
        buttonStyle={{
          backgroundColor: '#0064FE',
          borderRadius: 8,
          paddingVertical: 22,
          marginVertical: 20,
        }}>
        <AText
          style={{ color: '#FFF' }}
          children="Next"
          type={'reg'}
          isTouchable={false}
          fz={17}
        />
      </Button>
    </SafeAreaView>
  );
};
