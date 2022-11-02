import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { io } from 'socket.io-client';
import tron from 'reactotron-react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import AppNavigator from './src/navigations';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { API_BASE_URL } from 'constants/index';

const App = () => {
  // const socket = io(API_BASE_URL);

  // useEffect(() => {
  //   socket.on('connect', socket => {
  //     tron.log(socket); // x8WIv7-mJelg7on_ALbx
  //   });
  //   return () => {
  //     socket.off('disconnect');
  //   };
  // });
  return (
    <React.Fragment>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor="transparent"
          animated={true}
        />

        <AppNavigator />
      </SafeAreaProvider>
      <Toast topOffset={50} />
    </React.Fragment>
  );
};

export default () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: true,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};
