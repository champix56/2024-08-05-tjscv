import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
const Button = (props) => {
  console.log(props);
  return (
    <div
      style={{
        ...props.style,
        backgroundColor: props.bgcolor,
        color: props.color,
      }}
      className={style.Button}
      data-testid="Button"
    >
      {props.children}
    </div>
  );
};
Button.propTypes = {
  bgcolor: PropTypes.string,
  color: PropTypes.oneOf(["white", "black"]).isRequired,
  style: PropTypes.exact({
    textDecoration: PropTypes.oneOf(["underline", "none"]),
    fontWeight: PropTypes.oneOf([100, 500, 900]),
  }),
};
Button.defaultProps = {
  bgcolor: "yellow"
};
export default Button;
