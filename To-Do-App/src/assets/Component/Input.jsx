import React, { useState } from "react";

function Input({ taskList, setTaskList }) {
  const [task,setTask]=useState("")
  const handleAddTask=(e)=>{
    e.preventDefault()
    if(task.trim() !== ""){
      setTaskList([...taskList,task])
      setTask("")

    }
  }

  return (
    <form
      action=""
      className="text-center max-w-full px-6 flex items-center justify-center gap-0.5 mt-2"
    >
      <input
        type="text"
        placeholder="Add task"
        className="bg-white px-3 py-2 sm-[90%] md:w-[70%] lg:w-[50%]  w-full rounded-md   "
        style={{ border: "1px solid rgb(83, 89, 85)" }}
        value={task}
        onChange={(e)=> setTask(e.target.value)}
      />
      <button className="AddBtn" onClick={handleAddTask}>Add</button>
    </form>
  );
}

export default Input;
