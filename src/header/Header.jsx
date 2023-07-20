import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../actions/actions";
import "./Header.css";

function Header() {
  const [newTask, setnewTask] = useState();

  const dispatch = useDispatch();

  const handleAddClick = () => {
    if (newTask) {
      dispatch(addNewTask(newTask));
      setnewTask("");
    }
  };
  return (
    <>
      <h1 className="title">To Do List</h1>
      <div className="formAddTask">
        <input
          type="text"
          placeholder="Add a new task "
          onChange={(e) => setnewTask(e.target.value)}
          value={newTask}
        />
        <button onClick={() => handleAddClick()}>+</button>
      </div>
    </>
  );
}

export default Header;
