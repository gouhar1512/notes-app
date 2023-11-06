import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};
const noteIdToUpdateSlice = createSlice({
  name: "noteIdToUpdate",
  initialState,
  reducers: {
    setNoteIdToUpdate: function (state, action) {
      state.id = action.payload;
    },
    resetNoteIdToUpdate: function (state) {
      state.id = null;
    },
  },
});

export default noteIdToUpdateSlice;
export const noteIdToUpdateReducer = noteIdToUpdateSlice.reducer;
export const noteIdToUpdateActions = noteIdToUpdateSlice.actions;
