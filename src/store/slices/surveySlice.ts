import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {RootState} from '..';
import {AncillaryField, Survey} from '../../types';

interface SurveyStateState {
  selectedAncilarryFields: AncillaryField[];
  surveys: Survey[];
}

const initialState = {
  selectedAncilarryFields: [],
  surveys: [],
} as SurveyStateState;

const surveySlice = createSlice({
  name: 'surveySlice',
  initialState,
  reducers: {
    setSelectedAncillaryFields(state, {payload}: PayloadAction<any[]>) {
      state.selectedAncilarryFields = payload;
    },
    addNewSurvey(state, {payload}: PayloadAction<Survey>) {
      state.surveys = [...state.surveys, payload];
    },
  },
});

export const getSelectedAncillaryFields = (state: RootState) =>
  state.surveyState.selectedAncilarryFields;

export const getSurveys = (state: RootState) => state.surveyState.surveys;

export const {setSelectedAncillaryFields, addNewSurvey} = surveySlice.actions;

export default surveySlice.reducer;
