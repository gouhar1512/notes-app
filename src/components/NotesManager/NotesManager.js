import React from "react";
import NoteForm from "../NoteForm/NoteForm";
import NotesList from "../NotesList/NotesList";
import "./NotesManager.css";
const NotesManager = () => {
  return (
    <div className="notes-manager">
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default NotesManager;
