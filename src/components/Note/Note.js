import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../store/slices/notesListSlice";
import { setNoteIdToUpdate } from "../../store/slices/noteIdToUpdateSlice";
import "./Note.css";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const noteIdToUpdate = useSelector((state) => state.noteIdToUpdate.id);
  const noteSelected = noteIdToUpdate === note.id;

  const noteClasses = `note ${noteSelected ? "note-selected" : ""}`;

  const deleteNoteHandler = () => {
    if (note.id === noteIdToUpdate) {
      dispatch(setNoteIdToUpdate(null));
    }
    dispatch(deleteNote(note.id));
  };

  const setNoteToUpdateHandler = () => {
    dispatch(setNoteIdToUpdate(note.id));
  };

  return (
    <div className={noteClasses}>
      <div className="note-title">{note.title}</div>
      <div className="note-content">{note.content}</div>
      <div className="note-ctas">
        <div className="btn btn-note-update" onClick={setNoteToUpdateHandler}>
          <i className="fa fa-edit"></i>
        </div>
        <div className="btn btn-note-delete" onClick={deleteNoteHandler}>
          <i className="fa fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Note;
