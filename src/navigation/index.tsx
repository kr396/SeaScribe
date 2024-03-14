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
import AncillaryFields from '../screens/AncillaryFields';
import StartTransect from '../screens/StartTransect';
import SplashScreen from 'react-native-splash-screen';
import IllustratedBeaufortScale from '../screens/IllustratedBeaufortScale';
import DistanceEstimationGuide from '../screens/DistanceEstimationGuide';
import ManageData from '../screens/ManageData';
import EditAncillaryFields from '../screens/EditAncillaryFields';
import EditSurveyPlatforms from '../screens/EditSurveyPlatforms';
import EditObservers from '../screens/EditObservers';
import EditMethodologies from '../screens/EditMethodologies';
import EditHotkeyGroups from '../screens/EditHotkeyGroups';
import ViewGPSTestData from '../screens/ViewGPSTestData';
import Recovery from '../screens/Recovery';
import RecoveryInformation from '../screens/RecoveryInformation';
import RecordObservations from '../screens/RecordObservations';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import About from '../screens/About';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer onReady={SplashScreen.hide}>
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
        <Stack.Screen
          name="AncillaryFileds"
          options={{title: 'Select Ancillary Fields'}}
          component={AncillaryFields}
        />
        <Stack.Screen
          name="StartTransect"
          options={{title: 'Start Transect'}}
          component={StartTransect}
        />
        <Stack.Screen
          name="IllustratedBeaufortScale"
          options={{title: 'Illustrated Beaufort Scale'}}
          component={IllustratedBeaufortScale}
        />
        <Stack.Screen
          name="DistanceEstimationGuide"
          options={{title: 'Distance Estimation Guide'}}
          component={DistanceEstimationGuide}
        />
        <Stack.Screen
          name="ManageData"
          options={{title: 'Manage Data'}}
          component={ManageData}
        />
        <Stack.Screen
          name="EditAncillaryFields"
          options={{title: 'Edit Ancillary Fields'}}
          component={EditAncillaryFields}
        />
        <Stack.Screen
          name="EditSurveyPlatforms"
          options={{title: 'Edit Survey Platforms'}}
          component={EditSurveyPlatforms}
        />
        <Stack.Screen
          name="EditObservers"
          options={{title: 'Edit Observers'}}
          component={EditObservers}
        />
        <Stack.Screen
          name="EditMethodologies"
          options={{title: 'Edit Methodologies'}}
          component={EditMethodologies}
        />
        <Stack.Screen
          name="EditHotkeyGroups"
          options={{title: 'Edit Hotkey Groups'}}
          component={EditHotkeyGroups}
        />
        <Stack.Screen
          name="ViewGPSTestData"
          options={{title: 'View GPS Tes tData'}}
          component={ViewGPSTestData}
        />
        <Stack.Screen
          name="Recovery"
          options={{title: 'Recovery'}}
          component={Recovery}
        />
        <Stack.Screen
          name="RecoveryInformation"
          options={{title: 'Recovery Information'}}
          component={RecoveryInformation}
        />
        <Stack.Screen
          name="RecordObservations"
          options={{title: 'Start Transect'}}
          component={RecordObservations}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          options={{title: 'Privacy Policy'}}
          component={PrivacyPolicy}
        />
        <Stack.Screen
          name="About"
          options={{title: 'About'}}
          component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
