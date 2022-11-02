import { Button } from '@rneui/base';
import { AText, LottieIcon } from 'components';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { palette, RHeight, RWidth, width } from 'theme';

interface Props {
  tryAgain: () => void;
  isLoading: any;
  header: any;
}
export const ErrorComponent: React.FC<Props> = ({
  tryAgain,
  isLoading,
  header,
}) => {
  var error_icon = require('assets/json/error.json');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: palette.white,
      }}>
      {header}
      <View style={{ flex: 2 }}>
        <LottieIcon
          source={error_icon}
          iconStyle={{
            width: RWidth(150),
            height: RHeight(150),
            alignSelf: 'center',
          }}
          loop={true}
        />
      </View>
      <Button
        onPress={tryAgain}
        disabled={isLoading}
        disabledStyle={{ opacity: 0.5 }}
        containerStyle={{
          width: width,
          paddingHorizontal: 16,
          alignSelf: 'center',
          position: 'absolute',
          bottom: 40,
        }}
        buttonStyle={{
          backgroundColor: palette.primary,
          borderRadius: 5,
          paddingVertical: 15,
        }}>
        <AText
          style={{ color: palette.white }}
          children="Try Again Please"
          type={'bold'}
          isTouchable={false}
          fz={14}
        />
      </Button>
    </SafeAreaView>
  );
};
