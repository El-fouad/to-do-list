import React, { useEffect, useState } from "react";
import "./Tasks.css";
import Task from "../task/Task";
import { DataTasks } from "../data";

function Tasks() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState();
  useEffect(() => {
    setTasks(DataTasks);
  },[]);

 
  const handleClick = (id)=>{
    
    setTasks(tasks.map(ts=>{
      return ts.id==id?{...ts,status:!ts.status}:ts
    }))
    
  }
  return (
    <>
      <div className="containerTasks">
        {tasks ? tasks.map((tsk) => <Task 
        nameTask={tsk.title}
        isChecked={tsk.status}
        onClick={()=>handleClick(tsk.id)}
        />
        ) : " no task"}
        {console.log(tasks)}
      </div>
    </>
  );
}

export default Tasks;
