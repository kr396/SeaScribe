import {combineReducers} from '@reduxjs/toolkit';

import appSlice from './slices/appSlice';
import ancillaryFieldsSlice from './slices/ancillaryFieldsSlice';
import surveySlice from './slices/surveySlice';

const rootReducer = combineReducers({
  appState: appSlice,
  ancillaryFields: ancillaryFieldsSlice,
  surveyState: surveySlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
