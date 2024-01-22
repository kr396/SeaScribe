import {combineReducers} from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import ancillaryFieldsSlice from './slices/ancillaryFieldsSlice';
const rootReducer = combineReducers({
  appState: appSlice,
  ancillaryFields: ancillaryFieldsSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
