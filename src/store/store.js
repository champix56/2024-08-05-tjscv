import { combineReducers, createStore } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";
import { emptyMeme } from "orsys-tjs-meme";
const initialStateR = {
  memes: [],
  images: [],
};

const reducer = (state = initialStateR, action) => {
    console.log(action)
  switch (action.type) {
    case "ADD_MEME":
      return { ...state, memes: [...state.memes, action.payload] };

    default:
      return state;
  }
};
const initialCurrent = emptyMeme;
const reducerCurrent = (state = initialCurrent, action) => {
  switch (action.type) {
    case "CURRENT/CHANGE_CURENT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
const addMeme = (meme) => {
  return { type: "ADD_MEME", payload: meme };
};*/

/*
let state = reducer(undefined, addMeme({ abc: 123 }));
console.log(state);
state = reducer(state, { type: "ADD_MEME", payload: { abc: 852 } });
console.log(state);*/
export const store = createStore(
    combineReducers({current:reducerCurrent,ressources:reducer}));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addMeme({ ara: 123 }));
store.dispatch({type:'CHANGE_MEME',payload:{ text: "coucoc" }});
store.dispatch(addMeme({ abc: 123 }));
store.dispatch(addMeme({ fgh: 123 }));
store.dispatch(addMeme({ uyiu: 123 }));
