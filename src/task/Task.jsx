import React, { useEffect, useState } from "react";
import "./Task.css";
import { DataTasks } from "../data";
import { useDispatch } from "react-redux";
import { checkedTaskAction } from "../actions/actions";
import { BsFillTrash3Fill } from 'react-icons/bs';

function Task(props) {
  const dispatch = useDispatch()
  const handleChange = () => {
    dispatch(checkedTaskAction())
  };
  return (
    <>
      <div className="taskBody" >
        <h3 style={props.trashTask} >{props.nameTask} </h3>
        <div className="actions">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => handleChange(props.id)}
            onClick={props.onClick}
            checked={props.isChecked}
          />
          <button onClick={props.onClickDelete}><BsFillTrash3Fill/></button>
        </div>
      </div>
    </>
  );
}

export default Task;
