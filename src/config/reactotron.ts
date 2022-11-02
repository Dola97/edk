import Reactotron from 'reactotron-react-native';
Reactotron.configure({
  // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  name: 'Edakitic',
})
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: { veto: stackFrame => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();
