import React from "react";

function Header() {
  return (
    <>
      <h1>To Do List</h1>
      <div className="formAddTask">
        <input type="text" placeholder="Add a new task "/>
        <button>+</button>
      </div>
    </>
  );
}

export default Header;
