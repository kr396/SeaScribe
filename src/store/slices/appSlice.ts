import {createSlice} from '@reduxjs/toolkit';

interface AppState {
  value: number;
}

const initialState = {value: 0} as AppState;

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;
export default appSlice.reducer;
