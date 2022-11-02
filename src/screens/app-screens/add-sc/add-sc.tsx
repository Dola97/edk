import { Divider } from '@rneui/base';
import { AText, Input, SubmitButton, TypePostModal } from 'components';
import { ArrowDown, Audio, File, Image, Video } from 'constants/icons';
import { useModal } from 'hooks';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Platform, SafeAreaView, View } from 'react-native';
import { styleAuth } from 'screens/auth-screens/reg-sc/styles';
import { RHeight, width } from 'theme';

export const AddScreen = () => {
  const { control } = useForm();
  const { setModal } = useModal();
  const _handleOpen = useCallback(() => {
    setModal({ type: 'post', val: true });
  }, [setModal]);
  const MEDIA = [
    {
      press: () => console.log('d'),
      icon: <Image />,
      name: 'Image',
    },
    {
      press: () => console.log('d'),
      icon: <Video />,
      name: 'Video',
    },
    {
      press: () => console.log('d'),
      icon: <Audio />,
      name: 'Audio',
    },
    {
      press: () => console.log('d'),
      icon: <File />,
      name: 'File',
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}>
      <TypePostModal />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        <AText
          style={{ color: '#272727' }}
          children={'Cancel'}
          type={'semi'}
          isTouchable={true}
          pressText={() => console.log('')}
          fz={15}
        />
        <AText
          style={{ color: '#272727' }}
          children={'Create Post'}
          type={'semi'}
          isTouchable={false}
          fz={15}
        />
        <SubmitButton
          width={69}
          txt="Post"
          onPress={() => console.log('hahha')}
        />
      </View>
      <Divider color="#707070" width={1} style={{ marginTop: 12 }} />
      <View
        style={{
          marginHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <AText
          style={{ color: '#272727', paddingTop: 18 }}
          children={'User Name'}
          type={'semi'}
          isTouchable={false}
          fz={14}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AText
            style={{ color: '#272727', paddingTop: 18, paddingRight: 4 }}
            children={'Post to your Profile'}
            type={'semi'}
            isTouchable={true}
            pressText={_handleOpen}
            fz={14}
          />
          <ArrowDown style={{ top: 10 }} fill="#000000" />
        </View>
      </View>
      <Input
        name="Text"
        renderErrorMessage={false}
        // disabled={props.fetching ? true : false}
        errorStyle={styleAuth.error}
        control={control}
        multiline
        placeholder="What do you want to write about ?"
        inputContainerStyle={{ paddingVertical: 7, borderBottomWidth: 0 }}
        inputStyle={{ ...styleAuth.input, paddingTop: 12, color: '#272727' }}
        isPassword={false}
        labelStyle={styleAuth.label}
        rules={{
          required: 'Filed Required',
        }}
      />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',

          padding: 14,
          bottom: 10,
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
          height: RHeight(170),
          width: width / 1.08,
        }}>
        <AText
          style={{ color: '#272727', textAlign: 'center' }}
          children={'What do you want to post ?'}
          type={'semi'}
          isTouchable={false}
          fz={12}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 29,
          }}>
          {MEDIA.map((item, key) => (
            <View style={{ alignItems: 'center' }} key={`hellp_ocoa${key}`}>
              {item.icon}
              <AText
                style={{ color: '#272727', marginTop: 7 }}
                children={item.name}
                type={'semi'}
                isTouchable={false}
                fz={10}
              />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
