import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../actions/actions";

function Header() {
  const [newTask, setnewTask] = useState();

  const dispatch = useDispatch()

  const handleAddClick =()=>{
    dispatch(addNewTask(newTask))
  }
  return (
    <>
      <h1>To Do List</h1>
      <div className="formAddTask">
        <input
          type="text"
          placeholder="Add a new task "
          onChange={(e) => setnewTask(e.target.value)}
        />
        <button onClick={()=>handleAddClick()}>+</button>
      </div>
    </>
  );
}

export default Header;
