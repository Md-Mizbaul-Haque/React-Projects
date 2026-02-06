import React, { useState } from "react";
import { Search, Bell, CalendarDays } from "lucide-react";
import { LogoNames } from "../hooks/useLogoName";
import {useGetdate} from "../hooks/useGetdate"

function Navbar() {
  const {day,month}= useGetdate()

  const [input, setInput] = useState("");
  return (
    <div className="px-2 py-3 rounded bg-white  border border-gray-500 flex items-center justify-between z-50">
      <div className="px-3" name="Logo">
        {LogoNames()}
      </div>

      <div>
        <div className="flex items-center justify-center gap-4 ">
          <div className="flex items-center justify-center border border-gray-400 rounded">
            <input
              type="text"
              placeholder="Search your task here..."
              size={30}
              className="outline-none rounded-l py-1 px-2"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button className="cursor-pointer bg-rose-400 rounded-r border  px-2 py-1 text-white hover:bg-rose-500 ">
              <Search absoluteStrokeWidth={1} />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="p-2 rounded bg-rose-400 cursor-pointer ">
              <Bell
                strokeWidth={1}
                color="white"
                size={18}
                absoluteStrokeWidth
              />
            </button>
            <button className="p-2 rounded bg-rose-400 cursor-pointer">
              <CalendarDays
                strokeWidth={1}
                size={19}
                color="white"
                absoluteStrokeWidth
              />
            </button>
          </div>
          <div className="flex flex-col justify-center items-start text-sm font-medium px-3">
            <span>{day}</span>
            <span  className="text-blue-400">{month}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
