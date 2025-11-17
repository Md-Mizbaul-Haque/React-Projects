import { useState } from "react";
import "./App.css";
import Input from "./assets/Component/Input";
import Board from "./assets/Component/Board";

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
    <>
      <h1 className="text-3xl text-center text-red-600 font-light mt-5">
        To-Do-App
      </h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className="p-5">
        <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3  p-2">
          {taskList.map((task, index) => (
            <Board 
            task={task}
            index={index}
            key={index}
            setTaskList={setTaskList}
            taskList ={setTaskList}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
