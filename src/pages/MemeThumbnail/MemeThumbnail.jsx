import React from "react";
import { MemeSVGViewer } from "orsys-tjs-meme";
import style from "./MemeThumbnail.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function MemeThumbnail(props) {
  return (
    <div className={style.MemeThumbnail}>
      {props.memes.map((m, i) => {
        return (
          <Link to={"/editor/" + m.id} key={"t" + i}>
            <div>
              {m.titre}
              <br />
              <MemeSVGViewer
                meme={m}
                image={props.images.find((image) => {
                  return image.id === m.imageId;
                })}
                basePath=""
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
MemeThumbnail.propTypes = {
  images: PropTypes.array.isRequired,
  memes: PropTypes.array.isRequired,
};
