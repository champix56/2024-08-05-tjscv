import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme } from "orsys-tjs-meme";

const initialState = emptyMeme;

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    changeMeme(state, action) {
      delete state.id;
      Object.assign(state, action.payload);
    },
    resetMeme(state) {
      delete state.id;
      Object.assign(state, emptyMeme);
    },
  },
});

export const { changeMeme, resetMeme } = current.actions;
const currentReducer = current.reducer;
export default currentReducer;
