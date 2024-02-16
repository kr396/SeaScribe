export type Methodology = {
  id: number;
  label: string;
  created: Date;
  transectTypeId: number;
  countingMethodologyId: number;
  countingPerformedOnId: number;
  ancillaryFields?: AncillaryField[];
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
