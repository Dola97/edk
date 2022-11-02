import React, { useState } from 'react';
import { AText, Input } from 'components';
import { Eye, EyeOpen } from 'constants/icons';
import { EMAIL_REGEX } from 'constants/index';
import { styleAuth } from '../styles';
import { TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/base';
import { width } from 'theme';

interface Props {
  fetching: boolean | undefined;
  control: any;

  create: () => void;
  pressPrivacy: () => void;
  pressText: () => void;
}
export const Form: React.FC<Props> = props => {
  const [ispass, updatePass] = useState(false);
  return (
    <>
      <Input
        name="email"
        renderErrorMessage={false}
        disabled={props.fetching ? true : false}
        errorStyle={styleAuth.error}
        control={props.control}
        inputContainerStyle={{ ...styleAuth.inputC, paddingVertical: 7 }}
        inputStyle={{ ...styleAuth.input, paddingTop: 12 }}
        isPassword={false}
        label="Email"
        labelStyle={styleAuth.label}
        rules={{
          required: 'Email Required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Email Invalid',
          },
        }}
      />
      <Input
        name="name"
        renderErrorMessage={false}
        disabled={props.fetching ? true : false}
        errorStyle={styleAuth.error}
        containerStyle={{ marginVertical: 16 }}
        control={props.control}
        inputContainerStyle={{ ...styleAuth.inputC, paddingVertical: 7 }}
        inputStyle={{ ...styleAuth.input, paddingTop: 12 }}
        isPassword={false}
        label="Name"
        labelStyle={styleAuth.label}
        rules={{
          required: 'Name Required',
        }}
      />
      <Input
        name="password"
        renderErrorMessage={false}
        disabled={props.fetching ? true : false}
        errorStyle={styleAuth.error}
        control={props.control}
        inputContainerStyle={{ ...styleAuth.inputC, paddingVertical: 5 }}
        inputStyle={{ ...styleAuth.input, paddingTop: 12 }}
        isPassword={ispass ? true : false}
        label="Password"
        rightIcon={() =>
          ispass ? (
            <TouchableOpacity onPress={() => updatePass(!ispass)}>
              <Eye />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => updatePass(!ispass)}>
              <EyeOpen />
            </TouchableOpacity>
          )
        }
        labelStyle={styleAuth.label}
        rules={{
          required: 'Password Required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters ',
          },
        }}
      />
      <Button
        disabled={props.fetching ? true : false}
        disabledStyle={{ opacity: 0.5 }}
        onPress={props.create}
        loading={props.fetching}
        containerStyle={{ width: width, paddingHorizontal: 22 }}
        buttonStyle={{
          backgroundColor: '#0064FE',
          borderRadius: 8,
          paddingVertical: 22,
          marginVertical: 20,
        }}>
        <AText
          style={{ color: '#FFF' }}
          children="Create account"
          type={'reg'}
          isTouchable={false}
          fz={17}
        />
      </Button>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AText
          style={{ color: '#000000' }}
          children="By signing up you agree to our"
          type={'reg'}
          isTouchable={false}
          fz={12}
        />
        <AText
          style={{
            color: '#000000',
            textDecorationColor: '#000',
            textDecorationLine: 'underline',
          }}
          children=" Privacy Policy and Terms. "
          type={'reg'}
          isTouchable={true}
          pressText={props.pressPrivacy}
          fz={12}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 32,
        }}>
        <AText
          style={{ color: '#000000' }}
          children="Already have an account?"
          type={'reg'}
          isTouchable={false}
          fz={15}
        />
        <AText
          style={{
            color: '#0064FE',
            textDecorationLine: 'underline',
            textDecorationColor: '#0064FE',
            paddingLeft: 8,
            bottom: 1,
          }}
          children="Sign In"
          type={'reg'}
          pressText={props.pressText}
          isTouchable={props.fetching ? false : true}
          fz={15}
        />
      </View>
    </>
  );
};
