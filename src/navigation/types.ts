import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  NewSurvey: undefined;
  ExistingSurveys: undefined;
  Settings: undefined;
  Tools: undefined;
  NewMethodology: undefined;
  AncillaryFileds: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
