import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {
  Methodologies,
  Methodology,
  Observer,
  Observers,
  SurveyPlatform,
  SurveyPlatforms,
} from '../../types';
import {RootState} from '..';

interface AppState {
  methodologies: Methodologies;
  observers: Observers;
  surveyPlatforms: SurveyPlatforms;
}

const initialState = {
  methodologies: [],
  observers: [],
  surveyPlatforms: [],
} as AppState;

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    addNewMethodology(state, {payload}: PayloadAction<Methodology>) {
      state.methodologies = [...state.methodologies, payload];
    },
    addNewObserver(state, {payload}: PayloadAction<Observer>) {
      state.observers = [...state.observers, payload];
    },
    addNewSurveyPlatform(state, {payload}: PayloadAction<SurveyPlatform>) {
      state.surveyPlatforms = [...state.surveyPlatforms, payload];
    },
  },
});

export const getMethodologies = (state: RootState) =>
  state.appState.methodologies;
export const getObservers = (state: RootState) => state.appState.observers;
export const getSurveyPlatforms = (state: RootState) =>
  state.appState.surveyPlatforms;
export const {addNewMethodology, addNewObserver, addNewSurveyPlatform} =
  appSlice.actions;
export default appSlice.reducer;
