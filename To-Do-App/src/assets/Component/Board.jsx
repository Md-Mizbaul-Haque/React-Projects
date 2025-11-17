import React from "react";

function Board({ task, index, setTaskList, taskList }) {
    const handleDelete = (index)=>{
        setTaskList((prev)=> prev.filter((_,i)=> i !==index))

    }
  return (
    <>
      <div
        className="bg-white rounded-xl px-5 text-center relative shadow-black p-2"
        style={{ boxShadow: "0 0 3px 0.1px black" }}
      >
        <p className="break-all mb-2 mt-5">{task}</p>
        <button className=" absolute top-2 right-2 cursor-pointer "onClick={()=>handleDelete(index)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </>
  );
}

export default Board;
