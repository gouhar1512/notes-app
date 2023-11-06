import "./Note.css";

const Note = ({ note }) => {
  const deleteNoteHandler = () => {
    // dispatch(DELETE_ACTION(note.id));
  };

  const setNoteToUpdateHandler = () => {
    // dispatch(SET_NOTEID_TO_UPDATE_ACTION(note.id));
  };

  return (
    <div className="note">
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
