import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Undo2, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { removeTodo } from "../features/todos/todoSlice";
import { useNavigate } from "react-router-dom";

function TodoDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todos);
  const todo = todos.find((t) => t.id == id);

  console.log(todo, todos);
  // FUNCTION TO DELETE THE TODO FROM THIS APPLICATION
  const handleDelete = () => {
    navigate("/");
    dispatch(removeTodo(id));
  };

  return (
    <div className="border w-full h-[80vh] mt-10 border-gray-600 rounded-2xl p-3 m-2 relative">
      {/* LINK TO GO BACK TO HOME  */}
      <Link
        to="/"
        className="absolute top-2 font-semibold  right-4 cursor-pointer flex justify-center items-center gap-1 border p-1 rounded hover:bg-gray-100 "
      >
        <span>Go Back</span> <Undo2 size={15} strokeWidth={2.5} />
      </Link>
      {/* TODO DELETE BUTTON  */}
      <div className="absolute bg-white bottom-2 right-2 text-red-500">
        <button
          onClick={handleDelete}
          className="cursor-pointer flex justify-center items-center font-semibold border p-1 rounded hover:bg-gray-100"
        >
          Delete
          <Trash2 size={17} />
        </button>
      </div>

      <div className="flex  justify-start  gap-6 items-center">
        {todo.img && (
          <img src={todo.img} className="w-50 rounded object-contain"></img>
        )}
        <div className=" h-full flex gap-2.5 flex-col ">
          <h1 className="text-2xl text-gray-800 font-semibold w-[50vw]  line-clamp-3 todo-scroll overflow-auto break-all">
            {todo.title}
          </h1>
          <p className=" text-sm text-gray-700">Status : {todo.status}</p>
          <p className=" text-sm text-gray-700">
            Created on : {todo.createdAt}
          </p>
        </div>
      </div>
      {todo.description && (
        <div className="mt-3">
          <span className="text-xl font-semibold text-gray-800">
            Description
          </span>
          <p className="text-gray-600  w-full line-clamp-3  todo-scroll overflow-auto break-all">
            {todo.description}
          </p>
        </div>
      )}
      {todo.details && (
        <div className="mt-5 ">
          <span className="text-gray-700 font-semibold">Description :</span>
          <div
            className="prose prose-sm max-w-none text-gray-700 
             [&_ul]:list-disc [&_ol]:list-decimal 
             [&_ul]:pl-6 [&_ol]:pl-6"
            dangerouslySetInnerHTML={{ __html: todo.details }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default TodoDetails;
