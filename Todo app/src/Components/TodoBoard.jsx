import React, { useState } from "react";
import { LayersPlus } from "lucide-react";
import { useTodo } from "../Context";
import { MdDone } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

function TodoBoard() {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const { todos, deleteTodo, toggleComplete, updateTodo,forUpdate } = useTodo();

  return (
    <div className="w-[50%] text-white h-screen">
      <ul className="w-full flex flex-col gap-2 overflow-auto max-h-[80%] p-2">
        {todos?.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between p-2 border rounded
              ${item.complete ? "bg-gray-700 opacity-50 border-gray-400" : ""}
            `}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={item.complete}
                disabled={item.forUpdate}
                onChange={() => toggleComplete(item.id)}
                className="cursor-pointer w-4 h-4 rounded"
              />

              <div className="px-2">
                {editingId === item.id ? (
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="text-gray-400 border-none outline-none px-1 rounded"
                    autoFocus
                  
                  />
                ) : (
                  <p
                    className={`break-all 
                      ${item.complete ? "line-through opacity-60" : ""}
                    `}
                  >
                    {item.todo}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1">
              {editingId === item.id ? (
                <button
                  className="p-1 rounded bg-gray-300 text-green-600 cursor-pointer"
                  onClick={() => {
                    updateTodo(item.id, editText);
                    setEditingId(null);
                    forUpdate(item.id)
                  }}
                  disabled={item.complete}
                >
                  <MdDone />
                </button>
              ) : (
                <button
                  className="p-0.5 rounded bg-gray-300 text-blue-500 cursor-pointer"
                  onClick={() => {
                    setEditingId(item.id);
                    setEditText(item.todo);
                    forUpdate(item.id)
                    
                  }}
                  disabled={item.complete}
                >
                  <LayersPlus size={20} />
                </button>
              )}

              <button
                className="p-1 rounded bg-gray-300 text-red-500 cursor-pointer
                "
                onClick={() => deleteTodo(item.id)}
                disabled={item.complete ||item.forUpdate}
              

              >
                <IoCloseOutline />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoBoard;
