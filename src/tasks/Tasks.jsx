import React, { useEffect, useState } from "react";
import "./Tasks.css";
import Task from "../task/Task";
import { DataTasks } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction,checkedTaskAction } from "../actions/actions";

function Tasks() {

  const dataReducer = useSelector(state=>state)
  const dispatch = useDispatch()
  
 
  const handleClick = (id)=>{
    
    dispatch(checkedTaskAction(id))
  }
  const handleDeleteTask = (id)=>{
    dispatch(deleteAction(id))
  }
  return (
    <>
      <div className="containerTasks">
        {dataReducer[0] ? dataReducer.map((tsk) => <Task 
        nameTask={tsk.title}
        isChecked={tsk.status}
        id={tsk.id}
        trashTask={tsk.status ? { textDecoration: "line-through" } : null}
        onClick={()=>handleClick(tsk.id)}
        onClickDelete={()=>handleDeleteTask(tsk.id)}
        />
        ) : " no task"}
      </div>
    </>
  );
}

export default Tasks;
