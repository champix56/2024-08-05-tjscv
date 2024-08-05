import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  console.log(props);
  return (
    <div style={{...props.style,backgroundColor:props.bgcolor, color:props.color}} className={style.Button} data-testid="Button">
      {props.children}
    </div>
  );
};
export default Button;
