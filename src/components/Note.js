import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useState,useContext } from "react";
import AddNote from "./AddNote";
import {ThemeContext} from "../App";

const Note = ({ id, text, date, handleDeleteNote, handleUpdateNote }) => {
  const [isEdit, setIsEdit] = useState(false);
  const theme = useContext(ThemeContext);
  return (
    <>
      {!isEdit && (
        <div className={`${theme.mode && "note-dark"} ${!theme.mode && "note"}`}>
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
