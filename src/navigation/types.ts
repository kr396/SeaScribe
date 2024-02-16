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
  StartTransect: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
