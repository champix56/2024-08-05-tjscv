import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage, addImages } from "./ressources";
import { images } from "../../db/db.json";
import { reducerCurrent } from "./current";

export const store = configureStore({
  reducer: combineReducers({ ressources: ressourcesReducer }),
});
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addImages(images));
