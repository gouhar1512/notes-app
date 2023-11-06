import React, { useEffect, useState } from "react";
import "./NoteForm.css";
import { intialState } from "../../store/reference";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const id = crypto.randomUUID();
  const [isUpdatingNote, setIsUpdatingNote] = useState(false);

  const { notesList } = intialState;
  const noteIdToUpdate = null;

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
    // dispatch(SET_NOTEID_TO_UPDATE_ACTION(null))
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    if (noteIdToUpdate && notesList.length > 0) {
      // dispatch(UPDATE_ACTION(title, content));
      // dispatch(SET_NOTEID_TO_UPDATE_ACTION(null));
    } else {
      // dispatch(ADD_ACTION(id, title, content));
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
