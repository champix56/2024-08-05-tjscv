import React from "react";
import { MemeSVGViewer as UNCONNECTEDMemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const MemeSVGViewer = (props) => {
  const meme = useSelector((s) => s.current);
  const image = useSelector((s) =>
    s.ressources.images.find((i) => i.id === s.current.imageId)
  );
  /*const images = useSelector((s) => s.ressources.images);
  const image = images.find((i) => i.id === meme.imageId);*/
  return <UNCONNECTEDMemeSVGViewer {...props} meme={meme} image={image} />;
};
MemeSVGViewer.propTypes = {
  basePath: PropTypes.oneOf(["", "/", "/img"]),
};
export default MemeSVGViewer;
