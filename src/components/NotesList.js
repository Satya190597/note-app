import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note key={note.id} text={note.text} date={note.date} />;
      })}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
