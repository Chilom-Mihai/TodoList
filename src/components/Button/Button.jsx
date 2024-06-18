import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  // const [nr, setNr] = useState(0);
  // let nr = 0;
  // const handleClick = () => {
  // setNr(() => nr + 1);
  // console.log("Click", nr);
  // };
  return (
    // onClick={handleClick}
    <button onClick={props.clickFunction} className="btn">
      {props.buttonText}
      {/* {nr} */}
    </button>
  );
};

export default Button;
