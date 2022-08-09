import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";
const AddNote = ({
  handleAddNote,
  handleUpdateNote,
  id,  
  note,
  edit,
  editCloseHandler,
}) => {
  const [noteText, setNoteText] = useState(note ? note : "");
  const characterLimit = 200;
  const theme = useContext(ThemeContext);

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <>
      <div className={`${theme.mode && "note-dark"} ${!theme.mode && "note"}`}>
        <textarea
          rows="7"
          cols="10"
          placeholder="Type to add note"
          onChange={handleChange}
          value={noteText}
        ></textarea>
        {!edit && (
          <div className="note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            <button
              className={`${theme.mode && "save-dark"} ${
                !theme.mode && "save"
              }`}
              onClick={handleClick}
            >
              Save
            </button>
          </div>
        )}
        {edit && (
          <div className="note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            <button
              className={`${theme.mode && "save-dark"} ${
                !theme.mode && "save"
              }`}
              onClick={() => {
                handleUpdateNote(id, noteText);
                editCloseHandler(false);
              }}
            >
              Update
            </button>
            <button
              className={`${theme.mode && "save-dark"} ${
                !theme.mode && "save"
              }`}
              onClick={() => editCloseHandler(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddNote;
