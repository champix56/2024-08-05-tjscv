import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    // addImages(state, action) {
    //   state.images.push(...action.payload);
    // },
    // addImage(state, action) {
    //   state.images.push(action.payload);
    // },
  },
  extraReducers(builder) {
    builder.addCase(loadRessourcesFromRest.pending, (state, action) => {
      console.log("chargement des images en cours");
    });
    builder.addCase(loadRessourcesFromRest.fulfilled, (state, action) => {
      state.images.splice(0);
      state.images.push(...action.payload.images);
      state.memes.splice(0);
      state.memes.push(...action.payload.memes);
    });
  },
});

//export const { addImage, addImages } = ressources.actions;

export const loadRessourcesFromRest = createAsyncThunk(
  "ressources/loadImages",
  async () => {
    const promiseI = fetch("http://localhost:5679/images");
    const promiseM = fetch("http://localhost:5679/memes");
    const promiseSync = await Promise.all([promiseI, promiseM]);
    const images = await promiseSync[0].json();
    const memes = await promiseSync[1].json();
    return { memes: memes, images: images };
  }
);
const ressourcesReducer = ressources.reducer;

export default ressourcesReducer;
