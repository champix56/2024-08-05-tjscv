import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage, addImages } from "./ressources";
import { images } from "../../db/db.json";

export const store = configureStore({ reducer: ressourcesReducer });
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addImages(images));
