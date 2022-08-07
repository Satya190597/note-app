import React, { useState } from "react";
const AddNote = ({
  handleAddNote,
  handleUpdateNote,
  id,
  mode,
  note,
  edit,
  editCloseHandler,
}) => {
  const [noteText, setNoteText] = useState(note ? note : "");
  const characterLimit = 200;

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
      <div className={`${mode && "note-dark"} ${!mode && "note"}`}>
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
              className={`${mode && "save-dark"} ${!mode && "save"}`}
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
              className={`${mode && "save-dark"} ${!mode && "save"}`}
              onClick={() => {
                handleUpdateNote(id, noteText);
                editCloseHandler(false);
              }}
            >
              Update
            </button>
            <button
              className={`${mode && "save-dark"} ${!mode && "save"}`}
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
