import React, { useState } from "react";
import { useTodo } from "../Context";

function From() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      addTodo(todo);
      setTodo("");
    }
  };
  return (
    <div className="mt-9 w-[50%]">
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Write here..."
          className="outline-none px-3 py-2 rounded-l bg-gray-200 text-black w-full"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="px-3 py-2 rounded-r cursor-pointer bg-green-500">
          Add
        </button>
      </form>
    </div>
  );
}

export default From;
