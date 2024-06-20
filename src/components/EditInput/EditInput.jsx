import React, { useState } from "react";
import "./EditInput.css";
import Button from "../Button/Button";

const EditInput = (props) => {
  const [inputValue, setInputValue] = useState(props.todoDesc);
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    // console.log(inputValue);
  };
  //sau putem sa trimitem printr-o functie
  const handleEditTask = () => {
    props.editTodo(inputValue, props.id);
  };
  return (
    <div className="task">
      <input
        type="text"
        placeholder={props.placeholderText}
        value={inputValue}
        onChange={handleInputValue}
      />
      <Button buttonText={props.buttonText} clickFunction={handleEditTask} />
    </div>
  );
};

export default EditInput;
