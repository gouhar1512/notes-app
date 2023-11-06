import store from "../../store/store";
import Note from "../Note/Note";
import "./NotesList.css";

const NotesList = () => {
  const { notesList } = store.getState();
  if (notesList.length === 0) {
    return <div className="notes-list">Add some notes</div>;
  }
  let mappedNotesList = notesList.map((note) => (
    <Note key={note.id} note={note} />
  ));
  return <div className="notes-list">{mappedNotesList}</div>;
};

export default NotesList;
