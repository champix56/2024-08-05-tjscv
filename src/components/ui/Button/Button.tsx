import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

interface IButtonProps {
  bgcolor?: string;
  color?: "black" | "white";
  style?: {
    textDecoration?: "underline" | "none";
    fontWeight?: 100 | 500 | 900;
  };
  children:React.ReactElement|string|Array<React.ReactElement|string>
}

const Button: React.FC<IButtonProps> = (props) => {
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
  color: PropTypes.oneOf(["white", "black"]),
};
Button.defaultProps = {
  bgcolor: "yellow",
};
export default Button;
