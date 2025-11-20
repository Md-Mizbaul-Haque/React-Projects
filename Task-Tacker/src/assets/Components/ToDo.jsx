import React, { useState, useEffect } from "react";
import EditTask from "./EditTask";

function ToDo({ task, taskList, setTaskList, index, id }) {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(task.duration);

  const resetTime = () => {
    if (!running) {
      setTime(0);
    }
  };
  const handleDelete = (id) => {
    console.log(id);
    const newData = taskList.filter((t)=>t.id !== id)
    setTaskList(newData)
    localStorage.clear();
    localStorage.setItem("taskList", JSON.stringify(newData));
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div
        className=" flex max-w-lg  flex-col p-5  bg-white shadow rounded-xl  break-all"
        style={{ border: "1px solid rgb(140, 139, 136)" }}
      >
        <div className="flex justify-between items-center">
          <p className="text-3xl font-semibold">{task.taskName}</p>
          <EditTask taskList={taskList} setTaskList={setTaskList} task={task} />
        </div>
        <p className="mt-4">{task.taskDescription}</p>

        <div className="flex justify-between font-medium mt-6   ">
          <div className="flex  flex-col sm:flex-row  w-1/2 max-w-51  justify-between">
            <div>
              <span>
                {("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:
              </span>
              <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
              <span className="text-base ">
                {("0" + ((time / 10) % 100)).slice(-2)}
              </span>
            </div>
            <div className="text-sm text-white  flex gap-1 ">
              {running ? (
                <button
                  className="bg-red-500 px-2 rounded py-1 cursor-pointer"
                  onClick={() => setRunning(false)}
                >
                  Stop
                </button>
              ) : (
                <button
                  className="bg-green-500 px-2 py-1 rounded cursor-pointer"
                  onClick={() => setRunning(true)}
                >
                  Start
                </button>
              )}
              <button
                className="bg-blue-500  px-2 py-1 rounded cursor-pointer"
                onClick={resetTime}
              >
                Reset
              </button>
            </div>
          </div>
          <button
            className="cursor-pointer text-red-500 text-sm"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDo;
