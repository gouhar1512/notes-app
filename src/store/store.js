import { configureStore } from "@reduxjs/toolkit";
import { notesListActions, notesListReducer } from "./slices/notesListSlice";

const store = configureStore({
  reducer: {
    notesList: notesListReducer,
  },
});

console.log("Initial State", store.getState().notesList);

store.subscribe(() => {
  console.log("Updated State", store.getState().notesList);
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

export default store;
