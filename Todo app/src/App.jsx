import React from "react";
import From from "./Components/From";
import TodoBoard from "./Components/TodoBoard";


function App() {
  return (
    <div className="text-white bg-black text-center h-screen max-h-screen w-full">
      <div className=" flex justify-center items-center flex-col gap-2 ">
        <From />
        <TodoBoard/>
      </div>
    </div>
  );
}

export default App;
