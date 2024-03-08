import {ImageSourcePropType} from 'react-native';

export type Methodology = {
  id: number;
  label: string;
  created: Date;
  transectTypeId: number;
  countingMethodologyId: number;
  countingPerformedOnId: number;
};

export type Methodologies = Methodology[];

export type Observer = {
  id: number;
  created: Date;
  label: string;
  firstName: string;
  lastName: string;
  affiliation?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  email: string;
};

export type Observers = Observer[];

export type SurveyPlatform = {
  value: number;
  label: string;
  surveyPlatformTypeId: number;
};

export type SurveyPlatforms = SurveyPlatform[];

export type AncillaryField = {
  id: number;
  sort_order: number;
  created: Date;
  name: string;
  input_control_id: number;
  frequency_id: number;
  min_value: number | null;
  max_value: number | null;
  max_length: number | null;
  required: number;
};

export type IllustratedBeaufortScaleType = {
  id: number;
  description: string;
  wind_speed_kmh: string;
  wind_speed_mph: string;
  wind_speed_knots: string;
  wind_speed_mps: string;
  wave_height_m: string;
  wave_height_ft: string;
  sea_conditions: string;
  land_conditions: string;
  photo: ImageSourcePropType;
};
export type handleItemPress = {
  id: string;
  title: string;
  title2?: string; 
  route?: string; 
  showAlert?: boolean; 
  message?: string; 
  hasArrow?: boolean; 
};
export type manageData = {
  id: string;
  title: string;
  route: any;
  title2?: string;
  showAlert?: boolean;
  message?: string;
  hasArrow?: boolean;
}
