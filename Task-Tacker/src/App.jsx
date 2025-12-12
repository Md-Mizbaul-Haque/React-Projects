import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./assets/Components/AddTask";
import ToDo from "./assets/Components/ToDo";

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("taskList"));
      if (Array.isArray(saved)) {
        setTaskList(saved);
      } else {
        setTaskList([]); // reset if corrupted
      }
    } catch (err) {
      setTaskList([]); // reset if JSON is broken
    }
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      try {
        const saved = JSON.parse(localStorage.getItem("taskList"));
        if (Array.isArray(saved)) {
          setTaskList(saved);
        } else {
          setTaskList([]);
        }
      } catch (err) {
        setTaskList([]);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <>
      <div className="place-items-center">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-semibold py-4  pl-6">Task Tracker</h1>
          <p className="text-xl pl-6 ">Hi,there</p>
          <div className="text-xl pl-6">
            Click{" "}
            <span>
              <AddTask taskList={taskList} setTaskList={setTaskList} />
            </span>{" "}
            to add a new Task
          </div>
        </div>
        <div className=" w-full text-xl mt-5 p-3 flex gap-2 flex-col ">
          {taskList.length > 0 && (
            <h2 className="w-full bg-gray-500 p-2 font-semibold text-xl text-white rounded-xs">
              To Do
            </h2>
          )}
          {taskList.map((task, index) => (
            <ToDo
              key={index}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
              index={index}
              id={task.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
