import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage, addImages, loadImagesFromRest } from "./ressources";
import { images } from "../../db/db.json";
import currentReducer from "./current";

export const store = configureStore({
  reducer: combineReducers({
    ressources: ressourcesReducer,
    current: currentReducer,
  }),
});
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(loadRessourcesFromRest());
