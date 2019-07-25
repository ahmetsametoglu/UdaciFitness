import React from 'react';
import { View } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
import TabNav from './components/TabNav';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <TabNav />
      </View>
    </Provider>
  );
}
