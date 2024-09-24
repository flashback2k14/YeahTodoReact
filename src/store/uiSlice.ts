import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../shared";
import { RootState } from ".";

const initialState: UiState = {
  newItem: {
    shouldFocusInput: false,
    text: "",
  },
  chips: {
    removeSelection: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFocusInput: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        newItem: {
          ...state.newItem,
          shouldFocusInput: action.payload,
        },
      };
    },
    setNewItemText: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        newItem: {
          ...state.newItem,
          text: action.payload,
        },
      };
    },
    setRemoveChipsSelection: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        chips: {
          ...state.chips,
          removeSelection: action.payload,
        },
      };
    },
  },
});

export const { setFocusInput, setNewItemText, setRemoveChipsSelection } = uiSlice.actions;

export const selectNewItemFocusInput = (state: RootState) => state.ui.newItem.shouldFocusInput;
export const selectNewItemText = (state: RootState) => state.ui.newItem.text;
export const selectChipsRemoveSelection = (state: RootState) => state.ui.chips.removeSelection;

export default uiSlice.reducer;
