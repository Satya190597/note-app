import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is My First Note", date: "15/04/2021" },
    { id: nanoid(), text: "This is My Second Note", date: "15/04/2021" },
    { id: nanoid(), text: "This is My Third Note", date: "15/04/2021" },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const notesList = notes.filter((note) => note.id !== id);
    setNotes(notesList);
  };

  return (
    <div className="container">
      <Search handleSearchText={setSearchText} text={searchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};
export default App;
