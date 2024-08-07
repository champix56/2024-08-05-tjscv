import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  extraReducers(builder){
    builder.addCase(saveCurrent.fulfilled,(state,action)=>{
      Object.assign(state, action.payload);
    })
  }
});
export const saveCurrent = createAsyncThunk("current/save", async (meme) => {
  const pr = await fetch(
    `http://localhost:5679/memes${undefined != meme.id ? "/" + meme.id : ""}`,
    {
      method: undefined != meme.id ? "PUT" : "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(meme),
    }
  );
  return await pr.json();
});
export const { changeMeme, resetMeme } = current.actions;
const currentReducer = current.reducer;
export default currentReducer;
