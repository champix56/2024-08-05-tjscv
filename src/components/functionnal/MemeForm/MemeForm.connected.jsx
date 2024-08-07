import React, { useEffect } from "react";
import UNCONNECTEDMemeForm from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import { changeMeme, saveCurrent } from "../../../store/current";
import { loadRessourcesFromRest } from "../../../store/ressources";
const MemeForm = (props) => {
  const images = useSelector((storeState) => {
    return storeState.ressources.images;
  });
  const meme = useSelector((storeState) => {
    return storeState.current;
  });
  const dispatch = useDispatch();
//   useEffect(() => {
//     useDispatch()(loadRessourcesFromRest());
//     return () => {
//       //unmount
//     };
//   }, [])
  return (
    <UNCONNECTEDMemeForm
      {...props}
      images={images}
      meme={meme}
      onMemeChange={(meme) => dispatch(changeMeme(meme))}
      onMemeSave={(meme)=>dispatch(saveCurrent(meme))}
    />
  );
};

export default MemeForm;
