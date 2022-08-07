import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useState } from "react";
import AddNote from "./AddNote";
const Note = ({ id, text, date, handleDeleteNote, handleUpdateNote, mode }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {!isEdit && (
        <div className={`${mode && "note-dark"} ${!mode && "note"}`}>
          <span>{text}</span>
          <div className="note-footer">
            <small>{date}</small>
            <div>
              <MdEdit
                size="1.3em"
                className="edit-icon"
                onClick={() => setIsEdit((val) => !val)}
              />
              <MdDeleteForever
                className="delete-icon"
                size="1.3em"
                onClick={() => handleDeleteNote(id)}
              />
            </div>
          </div>
        </div>
      )}
      {isEdit && (
        <AddNote
          note={text}
          edit={true}
          editCloseHandler={setIsEdit}
          id={id}
          handleUpdateNote={handleUpdateNote}
        />
      )}
    </>
  );
};

export default Note;
