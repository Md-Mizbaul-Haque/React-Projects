import { useState,useEffect } from "react";



function Timer() {
  const [time, setTime] = useState(0);
  const [running,setRunning]=useState(false)
  
  useEffect(() => {
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }else if(!running && time!==0){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running,time]);




  return (
    <>
      <div className=" text-center flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-100 text-[rgb(37, 37, 380)]">
        <div className="flex justify-center items-center mx-auto w-auto flex-col  border border-indigo-500 py-3 px-3 rounded-2xl">
          <h3 className="text-3xl font-bold mb-5">Timer</h3>
          <div className="text-xl">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
          <div className="flex p-1 items-center gap-4 mt-5 w-xs  justify-around m-auto">
            {running? (
               <button className="btn  bg-red-600 hover:bg-red-700 hover:shadow shadow-black" onClick={()=>{setRunning(false)}}>Stop</button>
            ):( <button className="btn  bg-green-600 hover:bg-green-700 hover:shadow shadow-black" onClick={() => setRunning(true)}>Start</button>
           )}        
            <button className="btn bg-blue-500 hover:bg-blue-700 hover:shadow shadow-black" onClick={ !running && (()=>setTime(0))}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
