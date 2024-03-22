/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
// @ts-ignore
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {RealmProvider} from '@realm/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Router from './src/navigation';
import {persistor, store} from './src/store';
import './src/constants/unistyles';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RealmProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {__DEV__ ? <FlipperAsyncStorage /> : null}
            <Router />
          </PersistGate>
        </Provider>
      </RealmProvider>
    </GestureHandlerRootView>
  );
}

export default App;
