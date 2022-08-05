import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is My First Note", date: "15/04/2021" },
    { id: nanoid(), text: "This is My Second Note", date: "15/04/2021" },
    { id: nanoid(), text: "This is My Third Note", date: "15/04/2021" },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    setNotes(savedNotes ? savedNotes : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${darkMode && "dark-mode"} ${!darkMode && "light-mode"}`}>
      {
        !loading && <div className="container">
          <Header handleToggleDarkMode={setDarkMode} mode={darkMode} />
          <Search handleSearchText={setSearchText} text={searchText} mode={darkMode} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            mode={darkMode}
          />
        </div>       
      }
    </div>
  );
};
export default App;
