import { nanoid } from "nanoid";
const initialState = {
  notes: [
    { id: nanoid(), text: "ADD YOUR FIRST NOTE", date: "15/04/2021" },
    { id: nanoid(), text: "ADD YOUR SECOND NOTE", date: "15/04/2021" },
    { id: nanoid(), text: "ADD YOUR THIRD NOTE", date: "15/04/2021" },
  ],
};

export default initialState;
