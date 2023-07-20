import React, { useEffect, useState } from "react";
import "./Task.css";
import { DataTasks } from "../data";
import { useDispatch } from "react-redux";
import { checkedTaskAction } from "../actions/actions";

function Task(props) {
  const dispatch = useDispatch()
  const handleChange = () => {
    dispatch(checkedTaskAction())
  };
  return (
    <>
      <div className="taskBody" >
        <h5 style={props.trashTask} >{props.nameTask} </h5>
        <div className="actions">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => handleChange(props.id)}
            onClick={props.onClick}
            checked={props.isChecked}
          />
          <button onClick={props.onClickDelete}>delete</button>
        </div>
      </div>
    </>
  );
}

export default Task;
