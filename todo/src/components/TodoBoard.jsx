import React from "react";
import { ListTodo, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setShowTodoForm } from "../features/appSlice";
import { Link } from "react-router-dom";
function TodoBoard() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(setShowTodoForm());
  };

  const getStatusDisplay = (status) => {
    switch (status) {
      case "Completed":
        return <div className="text-green-600 text-xs">Status : Completed</div>;
      case "Not Started":
        return (
          <div className="text-rose-400 text-xs">Status : Not Started</div>
        );
      case "In Progress":
        return (
          <div className="text-blue-400 text-xs">Status : In Progress</div>
        );
      default:
        return <div className="text-gray-500">Unknown</div>;
    }
  };
  return (
    <div className="p-5 bg-white  flex-col   flex  items-center m-3    h-full shadow-xl  border border-gray-300 rounded ">
      <div className="text-center border-b-2 border-rose-400  pb-2   flex justify-between w-full   ">
        <div className="flex items-center text-xl gap-0.5  ">
          <ListTodo size={15} />
          <span className="text-rose-400 text-sm">Todo</span>
        </div>
        <div>
          <button
            className="flex items-center cursor-pointer "
            onClick={handleAdd}
          >
            <Plus size={15} />
            <span className="text-sm text-gray-800">Add task</span>
          </button>
        </div>
      </div>
      <div className=" rounded-2xl  flex flex-col bg-white h-95 w-full  mt-5 min-w-80 ">
        <div className="pb-1 pt-1 overflow-auto  overflow-y-auto   h-full w-full   p-1 todo-scroll">
          <ul className=" w-full h-full">
            {todos.length === 0 && (
              <div className="flex justify-center items-center h-full w-full ">
                <p className="text-gray-700 font-semibold text-2xl">
                  No task avilable
                </p>
              </div>
            )}
            {todos.map((todo) => (
              <li key={todo.id} className=" ">
                <Link to={`todo/${todo.id}`}>
                  <div className="max-w-lg mt-1 mx-auto  w-full bg-white rounded-xl overflow-hidden border border-gray-600 p-2  ">
                    <div className="flex justify-between ">
                      <div className="">
                        <h2 className="text-xl font-semibold  text-gray-800 mb-1 line-clamp-1 w-[22vw] truncate">
                          {todo.title}
                        </h2>
                        <div className="text-gray-600">
                          <p className="line-clamp-2 w-[23vw] truncate">
                            {todo.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        {todo.img ? (
                          <img
                            src={todo.img}
                            className="w-20  object-contain rounded"
                            alt=""
                          />
                        ) : (
                          ``
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-end mt-1">
                      <div className=" text-gray-700 ">
                        {getStatusDisplay(todo.status)}
                      </div>
                      <div className="text-xs text-gray-400 italic">
                        Created on: {todo.createdAt}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoBoard;
