import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  NewSurvey: undefined;
  ExistingSurveys: undefined;
  Settings: undefined;
  Tools: undefined;
  NewMethodology: {setMethodology: (id: number) => void} | undefined;
  AncillaryFileds?: {
    returnTo: 'start-new-survey' | 'new-methodology';
    selectedMethodologyId?: number;
  };
  StartTransect: {surveyId: number};
  IllustratedBeaufortScale: undefined;
  DistanceEstimationGuide: undefined;
  ManageData: undefined;
  EditAncillaryFields: undefined;
  EditSurveyPlatforms: undefined;
  EditObservers: undefined;
  EditMethodologies: undefined;
  EditHotkeyGroups: undefined;
  ViewGPSTestData: undefined;
  Recovery: undefined;
  RecoveryInformation: undefined;
  Table: undefined;
  RecordObservations: {surveyId: number};
  CameraScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
