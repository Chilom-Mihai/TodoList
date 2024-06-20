import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
import EditInput from "../EditInput/EditInput";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";

const Card = () => {
  const [todoArray, setTodoarray] = useState([]);
  const addTodo = (todo) => {
    //face spread si adauga si nou todo
    setTodoarray([
      ...todoArray,
      { id: uuidv4(), todoDesc: todo, isEditting: false },
    ]);
  };
  console.log(todoArray);

  const editTask = (taskDesc, id) => {
    setTodoarray(
      todoArray.map((todo) =>
        todo.id === id
          ? { ...todo, todoDesc: taskDesc, isEditting: !todo.isEditting }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoarray(todoArray.filter((todo) => todo.id !== id));
  };

  const editTodoMode = (id) => {
    setTodoarray(
      todoArray.map((todo) =>
        todo.id === id ? { ...todo, isEditting: !todo.isEditting } : todo
      )
    );
  };
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
      {todoArray.map((todo, index) =>
        todo.isEditting ? (
          <EditInput
            placeholderText="Edit your Task"
            buttonText="Edit Task"
            editTodo={editTask}
            key={index}
            todoDesc={todo.todoDesc}
            id={todo.id}
          />
        ) : (
          <Todo
            key={index}
            b
            todoText={todo.todoDesc}
            deleteTask={deleteTodo}
            id={todo.id}
            editTask={editTodoMode}
          />
        )
      )}
      {/* <Input placeholderText="Edit your task" buttonText="Edit Task" /> */}
      {/* <Input placeholderText="View your task" buttonText="View Task" /> */}
      {/* <Todo todoText="Task2" />
      <Todo todoText="Task3" /> */}
    </div>
  );
};

export default Card;
