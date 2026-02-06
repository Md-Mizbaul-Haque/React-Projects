import React from "react";
import { useSelector } from "react-redux";
import { Check, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";

function CompletedTask() {
  const todos = useSelector((state) => state.todos.todos);

  // Only get completed tasks
  const completedTodo = todos.filter((todo) => todo.status === "Completed");

  return (
    <div className="w-full   h-60 p-2">
      <div className="rounded bg-white shadow p-1  w-full h-full border-gray-300 flex flex-col border">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <Check size={20} className="text-green-400" />
          <span className="text-sm text-rose-400 font-semibold">
            Completed Tasks
          </span>
        </div>

        {/* Scrollable Task List */}
        <div className="flex-1 overflow-auto">
          {completedTodo.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <PartyPopper size={50} className="text-rose-400 mb-2" />
              <span className="text-xl text-gray-600 font-semibold text-center">
                Complete your task first!
              </span>
            </div>
          ) : (
            completedTodo.map((todo) => (
              <Link to={`todo/${todo.id}`} key={todo.id}>
                <div className="rounded mt-2 hover:bg-gray-100 flex justify-between items-center border w-full border-gray-200 p-3">
                  <div>
                    <h2 className="text-lg font-semibold w-90 text-gray-800 truncate">
                      {todo.title}
                    </h2>
                    <p className="text-sm text-gray-600 w-90 truncate">{todo.description}</p>
                  </div>
                  {todo.img && (
                    <img
                      src={todo.img}
                      alt="todo"
                      className="w-18   rounded object-contain"
                    />
                  )}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CompletedTask;
