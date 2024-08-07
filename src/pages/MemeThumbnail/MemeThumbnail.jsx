import React from "react";
import { MemeSVGViewer } from "orsys-tjs-meme";
import style from "./MemeThumbnail.module.css";
import PropTypes from "prop-types";
export default function MemeThumbnail(props) {
  return (
    <div className={style.MemeThumbnail}>
      {props.memes.map((m, i) => {
        return (
          <div key={"t" + i}>
            <MemeSVGViewer meme={m} image={props.images.find((image) => 
          image.id === m.imageId
        )} basePath="" />
            <br />
            {m.titre}
          </div>
        );
      })}
    </div>
  );
}
MemeThumbnail.propTypes = {
  images: PropTypes.array.isRequired,
  memes: PropTypes.array.isRequired,
};
