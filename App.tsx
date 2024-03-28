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
import {SafeAreaView} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

function App(): React.JSX.Element {
  const {styles} = useStyles(stylesheet);
  return (
    <GestureHandlerRootView style={styles.container}>
      <RealmProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {__DEV__ ? <FlipperAsyncStorage /> : null}
            <SafeAreaView style={styles.safeArea}>
              <Router />
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </RealmProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const stylesheet = createStyleSheet(({colors}) => ({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
}));
