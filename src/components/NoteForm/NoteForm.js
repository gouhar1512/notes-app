import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNote, updateNote } from "../../store/slices/notesListSlice";

import "./NoteForm.css";
import { setNoteIdToUpdate } from "../../store/slices/noteIdToUpdateSlice";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const id = crypto.randomUUID(); // You can use this to generate random id
  const [isUpdatingNote, setIsUpdatingNote] = useState(false);
  const dispatch = useDispatch();

  const notesList = useSelector((state) => state.notesList);
  const noteIdToUpdate = useSelector((state) => state.noteIdToUpdate.id);

  useEffect(() => {
    if (noteIdToUpdate && notesList.length > 0) {
      setIsUpdatingNote(true);
    } else {
      setIsUpdatingNote(false);
    }
  }, [noteIdToUpdate, notesList.length]);

  useEffect(() => {
    const note = notesList.find((item) => item.id === noteIdToUpdate);
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [noteIdToUpdate, notesList]);

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const setContentHandler = (e) => {
    setContent(e.target.value);
  };

  const cancelUpdateHandler = () => {
    dispatch(setNoteIdToUpdate(null));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    if (noteIdToUpdate && notesList.length > 0) {
      dispatch(
        updateNote({
          id: noteIdToUpdate,
          title,
          content,
        })
      );
      dispatch(setNoteIdToUpdate(null));
    } else {
      dispatch(
        addNote({
          id,
          title,
          content,
        })
      );
    }
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={onSubmitHandler}>
      <div className="note-form-control">
        <label htmlFor="note-title">Title</label>
        <input
          id="note-title"
          value={title}
          placeholder="Enter title"
          onChange={setTitleHandler}
        />
      </div>

      <div className="note-form-control">
        <label htmlFor="note-content">Content</label>
        <textarea
          id="note-content"
          value={content}
          placeholder="Enter note"
          onChange={setContentHandler}
        />
      </div>
      {!isUpdatingNote ? (
        <button type="submit" className="btn btn-add-note">
          Add Note
        </button>
      ) : (
        <div className="update-ctas">
          <button type="submit" className="btn btn-update-note">
            Update Note
          </button>
          <button
            type="button"
            className="btn btn-cancel-update"
            onClick={cancelUpdateHandler}>
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default NoteForm;
