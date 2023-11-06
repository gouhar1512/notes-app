import { configureStore } from "@reduxjs/toolkit";
import { notesListReducer } from "./slices/notesListSlice";

const store = configureStore({
  reducer: {
    notesList: notesListReducer,
  },
});

export default store;
