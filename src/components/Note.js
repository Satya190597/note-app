import {MdDeleteForever} from "react-icons/md";
const Note = ({id,text,date,handleDeleteNote,mode}) => {
    return (
        <div className={`${mode && "note-dark"} ${!mode && "note"}`}>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em" onClick={() => handleDeleteNote(id)}/>
            </div>
        </div>
    );
}

export default Note;