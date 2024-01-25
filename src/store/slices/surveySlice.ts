import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {RootState} from '..';

interface SurveyStateState {
  selectedAncilarryFields: any[];
}

const initialState = {selectedAncilarryFields: []} as SurveyStateState;

const surveySlice = createSlice({
  name: 'surveySlice',
  initialState,
  reducers: {
    setSelectedAncillaryFields(state, {payload}: PayloadAction<any[]>) {
      state.selectedAncilarryFields = payload;
    },
  },
});

export const getSelectedAncillaryFields = (state: RootState) =>
  state.surveyState.selectedAncilarryFields;

export const {setSelectedAncillaryFields} = surveySlice.actions;
export default surveySlice.reducer;
