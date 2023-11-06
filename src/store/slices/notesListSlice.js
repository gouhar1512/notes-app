const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  { id: 1, title: "Note 1", body: "This is note one" },
  { id: 2, title: "Note 2", body: "This is note two" },
  { id: 3, title: "Note 3", body: "This is note three" },
];

const notesListSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    addNote: function (state, action) {
      const newNote = action.payload;
      state.push(newNote);
    },
    deleteNote: function (state, action) {
      const noteId = action.payload;
      const index = state.findIndex((note) => note.id === noteId);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
    updateNote: function (state, action) {
      const { noteId, title, body } = action.payload;
      const index = state.findIndex((note) => note.id === noteId);
      if (index > -1) {
        state[index] = {
          title,
          body,
        };
      }
    },
  },
});

export default notesListSlice;
export const notesListReducer = notesListSlice.reducer;
export const notesListActions = notesListSlice.actions;
