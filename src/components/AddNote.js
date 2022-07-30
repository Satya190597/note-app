import React, { useState } from "react";
const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleClick = () => {
    handleAddNote(noteText);
  }
  return (
    <>
      <div className="note new">
        <textarea
          rows="8"
          cols="10"
          placeholder="Type to add note"
          onChange={handleChange}
          value={noteText}
        ></textarea>
        <div className="note-footer">
          <small>200 Remaining</small>
          <button className="save" onClick={handleClick}>Save</button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
