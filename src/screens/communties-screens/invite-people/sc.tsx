import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { AText, Input, SubmitButton } from 'components';
import { Attach, Back, Email, InviteSearch } from 'constants/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { styleAuth } from 'screens/auth-screens/reg-sc/styles';
import { width } from 'theme';

export const InvitePeopleScreen = () => {
  const { control } = useForm();
  const { navigate } = useNavigation();
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
          children={'Invite People'}
          type={'semi'}
          isTouchable={false}
          fz={16}
        />
        <Back />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
          marginHorizontal: 16,
          marginTop: 24,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Email style={{ marginRight: 7 }} />
          <AText
            style={{ color: '#272727' }}
            children={'Invite with email'}
            type={'semi'}
            isTouchable={false}
            fz={14}
          />
        </View>
        <Input
          name="email"
          renderErrorMessage={false}
          errorStyle={styleAuth.error}
          control={control}
          inputContainerStyle={{
            ...styleAuth.inputC,
            height: 48,
            width: width / 1.09,
            borderColor: '#CDD4D9',
          }}
          containerStyle={{ marginVertical: 14 }}
          inputStyle={{ ...styleAuth.input }}
          isPassword={false}
          rightIcon={() => (
            <SubmitButton
              width={75}
              txt="Send"
              onPress={() => console.log('hahha')}
            />
          )}
          labelStyle={styleAuth.label}
          rules={{
            required: 'Name Required',
          }}
        />
        <AText
          style={{ color: '#272727' }}
          children={'Invite using referral link'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
        <AText
          style={{ color: '#272727', paddingTop: 6 }}
          children={'Allow people to invite others to this group with a link'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
        <TouchableOpacity
          style={{
            width: width / 1.09,
            backgroundColor: '#F9F9F9',
            borderRadius: 10,
            alignSelf: 'center',
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16,
            marginTop: 22,
          }}>
          <Attach style={{ marginRight: 9 }} />
          <AText
            style={{ color: '#000000' }}
            children={'https://edactik.com/community/EGU4910-afwei/ZyKw24Jv'}
            type={'reg'}
            isTouchable={false}
            fz={12}
          />
        </TouchableOpacity>
        <Input
          name="email"
          renderErrorMessage={false}
          errorStyle={styleAuth.error}
          control={control}
          inputContainerStyle={{
            ...styleAuth.inputC,
            height: 48,
            width: width / 1.09,
            paddingHorizontal: 10,
            borderColor: '#ECECEC',
            backgroundColor: '#ECECEC',
          }}
          containerStyle={{ marginVertical: 14 }}
          inputStyle={{ ...styleAuth.input }}
          isPassword={false}
          leftIcon={() => <InviteSearch />}
          labelStyle={styleAuth.label}
          rules={{
            required: 'Name Required',
          }}
        />
      </ScrollView>
      <Button
        onPress={() => navigate('communtiyMainScreen')}
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
