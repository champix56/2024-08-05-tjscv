import React from "react";
import UNCONNECTEDMemeForm from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
const MemeForm = (props) => {
  const images = useSelector((storeState) => {
    return storeState.ressources.images;
  });
//   const dispatch = useDispatch();
  return (
    <UNCONNECTEDMemeForm
      {...props}
      images={images}
    //   onMemeChange={(meme) => dispatch(changeMeme(meme))}
    />
  );
};

export default MemeForm;
