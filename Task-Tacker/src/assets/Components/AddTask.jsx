import React, { use, useEffect, useState } from "react";

function AddTask({ taskList, setTaskList }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const deleteModal = () => {
    setAddModal(false);
    setTaskName("");
    setTaskDescription("");
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") setTaskName(value);
    setErrorMessage("");
    if (name === "taskDescription") setTaskDescription(value);
  };
  const handleAddTask = (e) => {
    e.preventDefault();

    if (taskName.trim() === "") {
      setErrorMessage("Enter your task name");
      return;
    }

    const timestamps = new Date().getTime();
    const newTask = {
      id: timestamps,
      taskName,
      taskDescription,
      timestamps,
      duration: 0,
    };

    // Load old tasks
    const savedTasks = JSON.parse(localStorage.getItem("taskList")) || [];

    // Add new task

    const updatedTasks = [...savedTasks, newTask];

    // Save to localStorage
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));

    // Update state to render immediately
    setTaskList(updatedTasks);

    // Reset input fields
    setTaskName("");
    setTaskDescription("");
    setAddModal(false);
  };

  return (
    <>
      <button
        className="px-2 py-0.3  text-white bg-blue-400 text-base rounded-lg cursor-pointer "
        onClick={() => setAddModal(true)}
      >
        New
      </button>
      {addModal ? (
        <>
          <div className="flex   justify-center flex-col items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100  p-2 mx-auto bg-opacity-5 backdrop-blur-xs">
            <div
              className=" w-[90%] bg-white shadow p-2 rounded-2xl  sm:w-sm md:w-md lg:w-lg"
              style={{ border: "1px solid rgb(140, 139, 136)" }}
            >
              <div className="flex flex-row  w-full ">
                <div className="flex flex-row justify-between  w-full    text-xl font-semibold rounded-xl  p-2 ">
                  <h3 className="ml-2">Add a new Task</h3>
                  <button
                    className="text-red-400 text-base cursor-pointer"
                    onClick={deleteModal}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              <div className="  w-full flex flex-col justify-center p-2 mt-5 ">
                <form
                  action=""
                  className=" w-full"
                  onSubmit={(e) => {
                    handleAddTask(e);
                  }}
                >
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
                    <p className="text-red-500 text-base font-semibold text-center">
                      {errorMessage}
                    </p>
                  </div>
                  <div className="mt-5">
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
                    onClick={handleAddTask}
                  >
                    Add task
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

export default AddTask;
