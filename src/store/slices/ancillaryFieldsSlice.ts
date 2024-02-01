import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ANCILLARY_FIELDS} from '../../data';
import {RootState} from '..';
import {AncillaryField} from '../../types';

const initialState = ANCILLARY_FIELDS;

const ancillaryFieldsSlice = createSlice({
  name: 'ancillaryFieldsSlice',
  initialState,
  reducers: {
    addAncillaryField(state, action: PayloadAction<AncillaryField>) {
      state = [...state, action.payload];
    },
  },
});

export const getAncillaryFields = (state: RootState) => state.ancillaryFields;
export const {addAncillaryField} = ancillaryFieldsSlice.actions;
export default ancillaryFieldsSlice.reducer;
