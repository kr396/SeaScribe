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
