import React from 'react';
import { Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { Props } from './type';
import { Input as TextInput } from '@rneui/base';
export const Input: React.FC<Props> = React.memo(props => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={props.rules}
      defaultValue={props.defaultValue}
      render={({
        field: { value, onBlur, onChange },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            placeholder={props.placeholder}
            value={value}
            numberOfLines={props.numberOfLines}
            onSubmitEditing={props.submitEditing}
            onChangeText={onChange}
            onBlur={onBlur}
            leftIcon={props.leftIcon}
            disabled={props.disabled}
            label={props.label}
            onFocus={props.onFocus}
            ref={props.ref}
            labelStyle={props.labelStyle}
            multiline={props.multiline}
            leftIconContainerStyle={props.leftIconContainerStyle}
            rightIcon={props.rightIcon}
            rightIconContainerStyle={props.rightIconContainerStyle}
            containerStyle={props.containerStyle}
            inputStyle={props.inputStyle}
            inputContainerStyle={props.inputContainerStyle}
            placeholderTextColor={props.placeholderTextColor}
            keyboardType={props.typeKeyboard}
            renderErrorMessage={props.renderErrorMessage}
            secureTextEntry={props.isPassword}
          />
          {error && <Text style={props.errorStyle}>{error.message}</Text>}
        </>
      )}
    />
  );
});
