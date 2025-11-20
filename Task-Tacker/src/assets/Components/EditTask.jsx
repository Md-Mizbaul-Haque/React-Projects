import React from "react";
import { useState, useEffect } from "react";
function EditTask({ taskList, setTaskList, task }) {
  const [editModal, setEditModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  useEffect(() => {
    setTaskName(task.taskName);
    setTaskDescription(task.taskDescription);
  }, []);

  const closeModal = () => {
    setEditModal(false);
    setTaskName("");
    setTaskDescription("");
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") setTaskName(value);
    if (name === "taskDescription") setTaskDescription(value);
  };

  const handleEditTask = (e) => {
    e.preventDefault();
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1);
    if (taskName === "") return;
    if (taskName) setTaskList([...taskList, { taskName, taskDescription }]);
    setTaskName("");
    setTaskDescription("");
    setEditModal(false);
  };
  return (
    <>
      <button
        className="font-medium cursor-pointer "
        onClick={() => setEditModal(true)}
      >
        <i className="fa-regular fa-pen-to-square"></i>
      </button>
      {editModal ? (
        <>
          <div className="flex   justify-center flex-col items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100  p-2 mx-auto bg-opacity-5 backdrop-blur-xs">
            <div
              className=" w-[90%] bg-white shadow p-2 rounded-2xl  sm:w-sm md:w-md lg:w-lg"
              style={{ border: "1px solid rgb(140, 139, 136)" }}
            >
              <div className="flex flex-row  w-full ">
                <div className="flex flex-row justify-between  w-full    text-xl font-semibold rounded-xl  p-2 ">
                  <h3 className="ml-2">Edit task</h3>
                  <button
                    className="text-red-400 text-base cursor-pointer"
                    onClick={closeModal}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              <div className="  w-full flex flex-col justify-center p-2 mt-5 ">
                <form action="" className=" w-full" onSubmit={(e)=>{handleEditTask(e)}}>
                  <div>
                    <label
                      htmlFor="project-name"
                      className="text-sm block font-semibold"
                    >
                      TASK NAME
                    </label>
                    <input
                      type="text"
                      className="  p-2  mt-1 w-full outline-none  text-base rounded"
                      placeholder="Write your project name  "
                      style={{ background: "rgb(237, 237, 237)" }}
                      id="project-name"
                      name="taskName"
                      value={taskName}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project-description"
                      className="text-sm block font-semibold"
                    >
                      TASK DISCRIPTION
                    </label>
                    <textarea
                      className="  peer w-full max-h-20 p-2 rounded 3xs:bg-red-400 text-base outline-none break-all overflow-y-auto overflow-x-hidden resize-none mt-2 no-scrollbar "
                      placeholder="Write your project name  "
                      style={{ background: "rgb(237, 237, 237)" }}
                      rows={9}
                      name="taskDescription"
                      value={taskDescription}
                      onChange={handleInput}
                      id="project-description"
                      onInput={(e) => {
                        e.target.style.height = "auto"; // reset height
                        e.target.style.height = e.target.scrollHeight + "px"; // set height based on content
                      }}
                    ></textarea>
                  </div>
                </form>
                <div className="flex justify-end items-center mt-5">
                  <button
                    className="px-3 py-2 bg-blue-400 text-sm text-white rounded-md cursor-pointer"
                    onClick={handleEditTask}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default EditTask;
