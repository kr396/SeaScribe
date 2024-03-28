import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ANCILLARY_FIELDS} from '../../data';
import {RootState} from '..';
import {AncillaryField, AncillaryFieldsInputSelectOption} from '../../types';

type AncillaryFieldsState = {
  ancillaryFieldsList: AncillaryField[];
  ancillaryFieldsInputSelectOptions: AncillaryFieldsInputSelectOption[];
};

const initialState = {
  ancillaryFieldsList: ANCILLARY_FIELDS,
  ancillaryFieldsInputSelectOptions: [],
} as AncillaryFieldsState;

const ancillaryFieldsSlice = createSlice({
  name: 'ancillaryFieldsSlice',
  initialState,
  reducers: {
    addAncillaryField(state, action: PayloadAction<AncillaryField>) {
      state.ancillaryFieldsList = [
        ...state.ancillaryFieldsList,
        action.payload,
      ];
    },
    addAncillaryFieldsInputSelectOptions(
      state,
      action: PayloadAction<AncillaryFieldsInputSelectOption>,
    ) {
      state.ancillaryFieldsInputSelectOptions = [
        ...state.ancillaryFieldsInputSelectOptions,
        action.payload,
      ];
    },
  },
});

export const getAncillaryFields = (state: RootState) =>
  state.ancillaryFields.ancillaryFieldsList;

export const {addAncillaryField, addAncillaryFieldsInputSelectOptions} =
  ancillaryFieldsSlice.actions;
export default ancillaryFieldsSlice.reducer;
