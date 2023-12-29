import {combineReducers} from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
const rootReducer = combineReducers({
  appState: appSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
