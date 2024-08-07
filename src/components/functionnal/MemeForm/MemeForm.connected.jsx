import React from "react";
import UNCONNECTEDMemeForm from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import { changeMeme } from "../../../store/current";
const MemeForm = (props) => {
  const images = useSelector((storeState) => {
    return storeState.ressources.images;
  });
  const meme = useSelector((storeState) => {
    return storeState.current;
  });
  const dispatch = useDispatch();
  return (
    <UNCONNECTEDMemeForm
      {...props}
      images={images}
      meme={meme}
      onMemeChange={(meme) => dispatch(changeMeme(meme))}
    />
  );
};

export default MemeForm;
