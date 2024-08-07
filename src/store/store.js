import { configureStore } from "@reduxjs/toolkit";
import { emptyMeme } from "orsys-tjs-meme";
import ressourcesReducer, { addImage, addImages } from "./ressources";
import { images } from "../../db/db.json";
// const initialCurrent = emptyMeme;
/*const reducerCurrent = (state = initialCurrent, action) => {
  switch (action.type) {
    case "CURRENT/CHANGE_CURENT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};*/
export const store = configureStore({ reducer: ressourcesReducer });
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addImages(images));
