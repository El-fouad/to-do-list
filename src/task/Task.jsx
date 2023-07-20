import React, { useEffect, useState } from "react";
import "./Task.css";
import { DataTasks } from "../data";

function Task(props) {
  const [isCheck, setisCheck] = useState(props.isChecked);
  const [trashTask, setTrashTask] = useState();
  useEffect(() => {
    setisCheck(props.isChecked)

    setTrashTask(isCheck ? { textDecoration: "line-through" } : null);
    
  },[isCheck]);
  console.log('state lesss ',isCheck);
  const handleChange = () => {
    setisCheck(!isCheck);
  };
  return (
    <>
      <div className="taskBody" >
        <h5 style={trashTask} >{props.nameTask} </h5>
        <div className="actions">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => handleChange()}
            onClick={props.onClick}
            checked={isCheck}
          />
          <button onClick={props.onClickDelete}>delete</button>
        </div>
      </div>
    </>
  );
}

export default Task;
