import React, { useState } from "react";
import "./Footer.css";
import { useDispatch } from "react-redux";
import { checkAllAction , deleteTasksAction, unCheckAll } from "../actions/actions";
function Footer() {
  const [isCheckAll , setCheckAll]=useState(false)
  const dispatch = useDispatch();
  return (
    <>
      <div className="footer">
        <button onClick={() => (setCheckAll(!isCheckAll),dispatch(!isCheckAll?checkAllAction():unCheckAll()))}>check all</button>
        <button onClick={()=>dispatch(deleteTasksAction())} >delete tasks</button>
      </div>
    </>
  );
}

export default Footer;
