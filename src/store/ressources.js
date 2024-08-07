import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    addImages(state, action) {
      state.images.push(...action.payload);
    },
    addImage(state, action) {
      state.images.push(action.payload);
    },
  },
});

export const {addImage,addImages} = ressources.actions;

const ressourcesReducer=ressources.reducer;

export default ressourcesReducer;