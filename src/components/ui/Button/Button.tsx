import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

interface IButtonProps {
  bgcolor?: string;
  color?: "black" | "white";
  style?: {
    textDecoration?: "underline" | "none";
    fontWeight?: 100 | 500 | 900;
  };
  children: React.ReactElement | string | Array<React.ReactElement | string>;
  type?: "button" | "submit" | "reset";
  onButtonClick?: Function;
}

const Button: React.FC<IButtonProps> = (props) => {
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    console.log("dans l'effet", isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  }, [isClicked]);
  useEffect(() => {
    //component pure mount
    setIsClicked(false);
    return () => {
      //unmount
    };
  }, []);

  return (
    <button
      style={{
        ...props.style,
        backgroundColor: props.bgcolor,
        color: props.color,
      }}
      type={props.type}
      className={`${style.Button}${isClicked ? " " + style.clicked : ""}`}
      data-testid="Button"
      onClick={(evt) => {
        setIsClicked(true);
        if (undefined != props.onButtonClick) {
          props.onButtonClick("coucou");
        }
      }}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  bgcolor: PropTypes.string,
  color: PropTypes.oneOf(["white", "black"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onButtonClick: PropTypes.func,
};
Button.defaultProps = {
  bgcolor: "yellow",
  type: "button",
};
export default Button;
