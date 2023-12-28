import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../features/todoSlice";

export default function AboutUs() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState("new val");

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  return (
    <>
      <h1 className="text-center mt-5">About Us</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2 className="text-center mt-5">id: {todo.id}</h2>
          <h2 className="text-center mt-5">text: {todo.text}</h2>
          <div className="text-center">
            <button
              className="text-center mt-5 bg-red-400 p-1 text-white"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Remove Todo 
            </button>
          </div>
        </div>
      ))}

      <div className="text-center">
        <button className="text-center mt-5 bg-slate-500 p-1 text-white" onClick={addTodoHandler}>
          Add Todo
        </button>
      </div>
    </>
  );
}
