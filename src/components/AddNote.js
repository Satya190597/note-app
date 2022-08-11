import React, { useState, useContext } from "react";
import { MdClose, MdSave } from "react-icons/md";
import { ThemeContext, NoteHandlerContext } from "../App";
const AddNote = ({ id, note, edit, editCloseHandler }) => {
  const [noteText, setNoteText] = useState(note ? note : "");

  const characterLimit = 200;

  const theme = useContext(ThemeContext);

  const noteHandler = useContext(NoteHandlerContext);

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleClick = () => {
    if (noteText.trim().length > 0) {
      if (edit) {
        noteHandler.dispatch({
          type: "edit",
          payload: { id: id, text: noteText },
        });
        editCloseHandler(false);
        return;
      }
      noteHandler.dispatch({ type: "add", payload: { text: noteText } });
      setNoteText("");
    }
  };

  const getControls = (edit) => {
    return (
      <div>
        <MdSave onClick={handleClick} size="1.3em" className="save-icon" />
        {edit && (
          <MdClose
            onClick={() => editCloseHandler(false)}
            size="1.3em"
            className="close-icon"
          />
        )}
      </div>
    );
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
        <div className="note-footer">
          <small>{characterLimit - noteText.length} Remaining</small>
          {getControls(edit)}
        </div>
      </div>
    </>
  );
};

export default AddNote;
