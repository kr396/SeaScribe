/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import SplashScreen from 'react-native-splash-screen';
import {RealmProvider} from '@realm/react';

import Router from './src/navigation';
import {persistor, store} from './src/store';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RealmProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {__DEV__ ? <FlipperAsyncStorage /> : null}
          <Router />
        </PersistGate>
      </Provider>
    </RealmProvider>
  );
}

export default App;
