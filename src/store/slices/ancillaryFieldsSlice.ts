import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {ANCILLARY_FIELDS} from '../../data';
import {RootState} from '..';

const initialState = ANCILLARY_FIELDS;

const ancillaryFieldsSlice = createSlice({
  name: 'ancillaryFieldsSlice',
  initialState,
  reducers: {
    addAncillaryField(state, action: PayloadAction<any>) {
      state = [...state, action.payload];
    },
  },
});

export const getAncillaryFields = (state: RootState) => state.ancillaryFields;
export const {addAncillaryField} = ancillaryFieldsSlice.actions;
export default ancillaryFieldsSlice.reducer;
