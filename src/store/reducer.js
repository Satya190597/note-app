import { nanoid } from "nanoid";
const reducer = (state, action) => {
  let updatedState = {};
  switch (action.type) {
    case "load":
      updatedState.notes = [...action.payload.notes];
      break;
    case "add":
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: action.payload.text,
        date: date.toLocaleDateString(),
      };
      updatedState.notes = [...state.notes, newNote];
      break;
    case "edit":
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      updatedState.notes = [...state.notes];
      updatedState.notes[index].text = action.payload.text;
      break;
    case "delete":
      updatedState.notes = state.notes.filter(
        (note) => note.id !== action.payload.id
      );
      break;
    default:
      updatedState.notes = state.notes;
  }
  return updatedState;
};

export default reducer;
