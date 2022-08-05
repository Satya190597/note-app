import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ notes, handleAddNote, handleDeleteNote, mode }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
            mode={mode}
          />
        );
      })}
      <AddNote handleAddNote={handleAddNote} mode={mode} />
    </div>
  );
};

export default NotesList;
