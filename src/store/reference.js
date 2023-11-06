/**
 * This file is just a reference. You can refer to this file
 * for implmenting functionalities with redux or redux toolkit or any other library
 *
 * This file follows the structure of Context API. It has the following:
 * 1. Global state
 * 2. Actions
 * 3. Action Creators
 * 4. Reducer
 *
 * You can split the global state and reducers into multiple chunks like slices
 */

/****************************************** Global State ***************************************/
export const intialState = {
  notesList: [
    { id: 1, title: "Note 1", content: "This is note one" },
    { id: 2, title: "Note 2", content: "This is note two" },
    { id: 3, title: "Note 3", content: "This is note three" },
  ],
  noteIdToUpdate: null,
};

/****************************************** Actions ********************************************/
const ADD = "ADD";
const DELETE = "DELETE";
const SET_NOTE_ID_TO_UPDATE = "SET_NOTE_ID_TO_UPDATE";
const UPDATE = "UPDATE";

/****************************************** Action Creators ************************************/
const ADD_ACTION = (id, title, content) => ({
  type: ADD,
  id,
  title,
  content,
});

const DELETE_ACTION = (id) => ({
  type: DELETE,
  id,
});

const SET_NOTEID_TO_UPDATE_ACTION = (id) => ({
  type: SET_NOTE_ID_TO_UPDATE,
  id,
});

const UPDATE_ACTION = (title, content) => ({
  type: UPDATE,
  title,
  content,
});

/****************************************** Reducer ********************************************/
const notesReducer = (state, action) => {
  switch (action.type) {
    case ADD: {
      let updatedNotesList = [...state.notesList];
      let newNote = {
        id: action.id,
        title: action.title,
        content: action.content,
      };
      updatedNotesList.push(newNote);
      return {
        ...state,
        notesList: updatedNotesList,
      };
    }
    case DELETE: {
      let updatedNotesList = [...state.notesList];
      updatedNotesList = updatedNotesList.filter(
        (note) => note.id !== action.id
      );
      return {
        ...state,
        notesList: updatedNotesList,
      };
    }
    case SET_NOTE_ID_TO_UPDATE: {
      return {
        ...state,
        noteIdToUpdate: action.id,
      };
    }
    case UPDATE: {
      let updatedNotesList = [...state.notesList];
      let index = updatedNotesList.findIndex(
        (note) => note.id === state.noteIdToUpdate
      );
      let updatedNote = updatedNotesList[index];
      updatedNote.title = action.title;
      updatedNote.content = action.content;
      updatedNotesList[index] = updatedNote;
      return {
        ...state,
        notesList: updatedNotesList,
      };
    }
    default:
      return state;
  }
};
