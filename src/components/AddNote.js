import React, { useState } from "react";
const AddNote = ({ handleAddNote,mode }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >=0 ) {
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
        <div className="note-footer">
          <small>{characterLimit - noteText.length} Remaining</small>
          <button className={`${mode && "save-dark"} ${!mode && "save"}`} onClick={handleClick}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
