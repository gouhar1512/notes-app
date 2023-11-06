import { configureStore } from "@reduxjs/toolkit";
import { notesListActions, notesListReducer } from "./slices/notesListSlice";
import {
  noteIdToUpdateActions,
  noteIdToUpdateReducer,
} from "./slices/noteIdToUpdateSlice";

const store = configureStore({
  reducer: {
    notesList: notesListReducer,
    noteIdToUpdate: noteIdToUpdateReducer,
  },
});

console.log("Initial State", store.getState());

store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(
  notesListActions.addNote({ id: 4, title: "Note4", content: "Content4" })
);

store.dispatch(notesListActions.deleteNote(2));
store.dispatch(
  notesListActions.updateNote({
    id: 1,
    title: "Note one",
    content: "Content one",
  })
);

store.dispatch(noteIdToUpdateActions.setNoteIdToUpdate(2));
store.dispatch(noteIdToUpdateActions.resetNoteIdToUpdate());

export default store;
