import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import {RootStackParamList} from './types';
import NewSurvey from '../screens/NewSurvey';
import Settings from '../screens/Settings';
import Tools from '../screens/Tools';
import ExistingSurveys from '../screens/ExistingSurveys';
import NewMethodology from '../screens/NewMethodology';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{title: 'SeaScribe'}}
          component={Home}
        />
        <Stack.Screen
          name="NewSurvey"
          options={{title: 'Start New Survey'}}
          component={NewSurvey}
        />
        <Stack.Screen
          name="ExistingSurveys"
          options={{title: 'Existings Survey'}}
          component={ExistingSurveys}
        />
        <Stack.Screen
          name="Settings"
          options={{title: 'Settings'}}
          component={Settings}
        />
        <Stack.Screen
          name="Tools"
          options={{title: 'Tools'}}
          component={Tools}
        />
        <Stack.Screen
          name="NewMethodology"
          options={{title: 'New Methodology'}}
          component={NewMethodology}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
