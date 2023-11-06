const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  { id: 1, title: "Note 1", content: "This is note one" },
  { id: 2, title: "Note 2", content: "This is note two" },
  { id: 3, title: "Note 3", content: "This is note three" },
];

const notesListSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    addNote: function (state, action) {
      const { id, title, content } = action.payload;
      state.push({ id: id, title: title, content: content });
    },
    deleteNote: function (state, action) {
      const noteId = action.payload;
      const index = state.findIndex((note) => note.id === noteId);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
    updateNote: function (state, action) {
      const { id, title, content } = action.payload;
      const index = state.findIndex((note) => note.id === id);
      if (index > -1) {
        state[index] = {
          title,
          content,
        };
      }
    },
  },
});

export default notesListSlice;
export const notesListReducer = notesListSlice.reducer;
export const { addNote, deleteNote, updateNote } = notesListSlice.actions;
