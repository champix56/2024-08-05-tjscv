import React, { useEffect } from "react";
import FlexWFirstGrow from "../components/layout/FlexWFirstGrow/FlexWFirstGrow";
import MemeSVGViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer";
import MemeForm from "../components/functionnal/MemeForm/MemeForm.connected";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMeme, resetMeme } from "../store/current";

function MemeEditor() {
  const routeParams = useParams();
  const d = useDispatch();
  const memes = useSelector((s) => s.ressources.memes);
  const nav = useNavigate();
  useEffect(() => {
    if (routeParams.id !== undefined) {
      const meme = memes.find((item) => item.id === parseInt(routeParams.id));
      if (meme !== undefined) {
        d(changeMeme(meme));
      } else if (memes.length > 0) {
        nav("/home");
      }
    } else {
      d(resetCurrent());
    }
    return () => {};
  }, [routeParams, memes, d]);
  return (
    <FlexWFirstGrow>
      <MemeSVGViewer basePath="" />
      <MemeForm />
    </FlexWFirstGrow>
  );
}
export default MemeEditor;
