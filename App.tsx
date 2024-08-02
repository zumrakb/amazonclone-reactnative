import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import Header from './src/components/Header';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    /* here is some changes sjkgsfdghlglrk */
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Header />
        <AppNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
