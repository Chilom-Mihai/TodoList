import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";

const Card = () => {
  const [todoArray, setTodoarray] = useState([]);
  const addTodo = (todo) => {
    //face spread si adauga si nou todo
    setTodoarray([...todoArray, todo]);
  };
  console.log(todoArray);
  return (
    <div className="card">
      <h1 className="text-[2.7rem] font-semibold pb-5 text-center text-white">
        Get Things Done!
      </h1>
      <Input
        placeholderText="What is the task today?"
        buttonText="Add Task"
        addTodo={addTodo}
      />
      {todoArray.map((todo, index) => (
        <Todo key={index} todoText={todo} />
      ))}
      {/* <Input placeholderText="Edit your task" buttonText="Edit Task" /> */}
      {/* <Input placeholderText="View your task" buttonText="View Task" /> */}
      {/* <Todo todoText="Task2" />
      <Todo todoText="Task3" /> */}
    </div>
  );
};

export default Card;
