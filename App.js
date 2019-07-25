import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { purple } from './utils/colors';

import reducer from './store/reducers';
import TabNav from './components/TabNav';
import { Constants } from 'expo';

const UdaciStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <SafeAreaView style={{ flex: 1 }}>
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
        <TabNav />
      </SafeAreaView>
    </Provider>
  );
}
