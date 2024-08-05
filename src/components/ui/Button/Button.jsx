import React from "react";

import style from "./Button.module.css";

const Button = (props) => {
  console.log(props);
  return (
    <div className={style.Button} data-testid="Button">
      {props.text}
    </div>
  );
};
export default Button;
