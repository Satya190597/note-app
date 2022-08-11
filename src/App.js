import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import initialState from "./store/state";
import reducer from "./store/reducer";
import Loading from "./util/LoadingMessage";
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export const NoteHandlerContext = createContext();

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

  return (
    <NoteHandlerContext.Provider
      value={{
        dispatch: dispatch,
      }}
    >
      <ThemeContext.Provider value={{ mode: darkMode, setMode: setDarkMode }}>
        <div
          className={`${darkMode && "dark-mode"} ${!darkMode && "light-mode"}`}
        >
          {!loading && (
            <div className="container">
              <Header />
              <Search handleSearchText={setSearchText} text={searchText} />
              <NotesList
                notes={state.notes.filter((note) =>
                  note.text.toLowerCase().includes(searchText.toLowerCase())
                )}
              />
            </div>
          )}
          {loading && <Loading />}
        </div>
      </ThemeContext.Provider>
    </NoteHandlerContext.Provider>
  );
};
export default App;
