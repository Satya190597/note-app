import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { createContext } from "react";

export const ThemeContext = createContext();

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

  const updateNote = (id, text) => {
    const index = notes.findIndex((note) => note.id === id);
    const notesList = [...notes];
    notesList[index].text = text;
    setNotes(notesList);
  };

  const deleteNote = (id) => {
    const notesList = notes.filter((note) => note.id !== id);
    setNotes(notesList);
  };

  return (
    <ThemeContext.Provider value={{ mode: darkMode, setMode: setDarkMode }}>
      <div
        className={`${darkMode && "dark-mode"} ${!darkMode && "light-mode"}`}
      >
        {!loading && (
          <div className="container">
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchText={setSearchText} text={searchText} />
            <NotesList
              notes={notes.filter((note) =>
                note.text.toLowerCase().includes(searchText.toLowerCase())
              )}
              handleAddNote={addNote}
              handleUpdateNote={updateNote}
              handleDeleteNote={deleteNote}
            />
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
