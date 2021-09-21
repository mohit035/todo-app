import React, { useState } from "react";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/action";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  console.log(list);
  return (
    <>
      <div className="main">
        <h1 className="heading">Add Your List Here</h1>
        <div className="addItems">
          <input
            type="Text"
            placeholder="Add Items..."
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <button
            className="btn"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          >
            Add Item
          </button>
        </div>
        <div className="showItems">
          {list.map((elem) => {
              return(
            <div className="eachItem" key = {elem.id}>
              <h3 className = "items">{elem.data}</h3>
              <div className = "todoBtn">
              <button onClick = {() => dispatch(deleteTodo(elem.id))}>Delete</button>
              </div>
              </div>
              )
           
          })
          }


        </div>

        <div>
            <button className = "removeAll" onClick= {() => dispatch(removeTodo())}>Remove All</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
