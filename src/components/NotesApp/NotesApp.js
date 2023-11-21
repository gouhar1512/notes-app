import React from "react";
import NoteForm from "../NoteForm/NoteForm";
import NotesList from "../NotesList/NotesList";
import "./NotesApp.css";
const NotesApp = () => {
  return (
    <div className="notes-app">
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default NotesApp;
