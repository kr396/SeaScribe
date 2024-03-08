import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  NewSurvey: undefined;
  ExistingSurveys: undefined;
  Settings: undefined;
  Tools: undefined;
  NewMethodology: undefined;
  AncillaryFileds: undefined;
  StartTransect: undefined;
  IllustratedBeaufortScale:undefined;
  DistanceEstimationGuide:undefined;
  ManageData:undefined;
  EditAncillaryFields:undefined;
  EditSurveyPlatforms:undefined;
  EditObservers:undefined;
  EditMethodologies:undefined;
  EditHotkeyGroups:undefined;
  ViewGPSTestData:undefined;
  Recovery:undefined;
  RecoveryInformation:undefined;
  Table:undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
