import React, { useState } from 'react';
import { AText, Input } from 'components';
import { AppleLogo, Eye, EyeOpen, GoogleLogo } from 'constants/icons';
import { EMAIL_REGEX } from 'constants/index';
import { styleAuth } from '../../reg-sc/styles';
import { TouchableOpacity, View } from 'react-native';
import { Button, Divider } from '@rneui/base';
import { RHeight, RWidth, width } from 'theme';

interface Props {
  fetching: boolean | undefined;
  control: any;
  create: () => void;
  pressText: () => void;
  apple: () => void;
  google: () => void;
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
        name="pass"
        renderErrorMessage={false}
        disabled={props.fetching ? true : false}
        errorStyle={styleAuth.error}
        control={props.control}
        containerStyle={{ marginTop: 16 }}
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
        }}
      />
      <AText
        style={{
          color: '#0064FE',
          alignSelf: 'flex-end',
          paddingTop: 15,
          paddingRight: 10,
        }}
        children="Forgot your password?"
        type={'reg'}
        isTouchable={props.fetching ? false : true}
        fz={12}
        pressText={props.pressText}
      />
      <Button
        onPress={props.create}
        disabled={props.fetching ? true : false}
        loading={props.fetching}
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
          children="Sign in"
          type={'reg'}
          isTouchable={false}
          fz={17}
        />
      </Button>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Divider
          orientation="horizontal"
          width={1}
          style={{ width: width / 2.6 }}
          color="#272727"
        />
        <AText
          style={{ color: '#000000', paddingHorizontal: 8 }}
          children="Or"
          type={'reg'}
          isTouchable={false}
          fz={16}
        />
        <Divider
          orientation="horizontal"
          width={1}
          style={{ width: width / 2.6 }}
          color="#272727"
        />
      </View>
      <Button
        disabled={props.fetching ? true : false}
        disabledStyle={{ opacity: 0.5 }}
        containerStyle={{
          width: width,
          marginTop: 22,
          paddingHorizontal: 22,
          alignSelf: 'center',
        }}
        onPress={props.apple}
        icon={<AppleLogo width={RWidth(25)} height={RHeight(25)} />}
        buttonStyle={{
          backgroundColor: '#101010',
          borderRadius: 8,
          paddingVertical: 22,
        }}>
        <AText
          style={{ color: '#FFF', paddingLeft: 18 }}
          children="Continue with Apple"
          type={'reg'}
          isTouchable={false}
          fz={17}
        />
      </Button>
      <Button
        disabled={props.fetching ? true : false}
        disabledStyle={{ opacity: 0.5 }}
        onPress={props.google}
        containerStyle={{
          paddingHorizontal: 22,
          alignSelf: 'center',
          width,
          marginTop: 10,
          borderRadius: 8,
          paddingBottom: 10,
        }}
        icon={<GoogleLogo width={RWidth(25)} height={RHeight(25)} />}
        buttonStyle={{
          backgroundColor: '#FFEFEE',
          borderRadius: 8,
          paddingVertical: 22,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}>
        <AText
          style={{ color: '#000000', paddingLeft: 18 }}
          children="Continue with Google"
          type={'reg'}
          isTouchable={false}
          fz={17}
        />
      </Button>
    </>
  );
};
