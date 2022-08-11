import { nanoid } from "nanoid";
const initialState = {
  notes: [
    { id: nanoid(), text: "This is My First Note", date: "15/04/2021" },
    { id: nanoid(), text: "This is My Second Note", date: "15/04/2021" },
    { id: nanoid(), text: "This is My Third Note", date: "15/04/2021" },
  ],
  isDarkMode: false,
};

export default initialState;
