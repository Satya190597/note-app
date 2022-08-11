import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import initialState from "./store/state";
import reducer from "./store/reducer";
import Loading from "./util/LoadingMessage";
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    dispatch({
      type: "load",
      payload: { notes: savedNotes ? savedNotes : [] },
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(state.notes));
  }, [state.notes]);

  const addNote = (text) => {
    dispatch({ type: "add", payload: { text: text } });
  };

  const updateNote = (id, text) => {
    dispatch({ type: "edit", payload: { id: id, text: text } });
  };

  const deleteNote = (id) => {
    dispatch({ type: "delete", payload: { id: id } });
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
              notes={state.notes.filter((note) =>
                note.text.toLowerCase().includes(searchText.toLowerCase())
              )}
              handleAddNote={addNote}
              handleUpdateNote={updateNote}
              handleDeleteNote={deleteNote}
            />
          </div>
        )}
        {
          loading && (
            <Loading />
          )
        }
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
