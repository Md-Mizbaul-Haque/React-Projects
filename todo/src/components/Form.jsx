import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import { useGetdate } from "../hooks/useGetdate";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import { setShowTodoForm, setShowDiscardPage } from "../features/appSlice";
import TakeImg from "./takeImg";
import TodoEditor from "./tinyMce";

function Form() {
  const { month } = useGetdate();
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const [img, setImg] = useState(null);
  const [input, setInput] = useState("");
  const [description, setdescripion] = useState("");
  const [status, setStatus] = useState("Not Started");
  const handleCloseForm = () => {
    if (input !== "" || description !== "") {
      dispatch(setShowDiscardPage());
      return;
    }
    dispatch(setShowTodoForm());
  };
  const addTask = (e) => {
    e.preventDefault();
    const detailedContent = editorRef.current?.getContent() || "";
    dispatch(
      addTodo({
        title: input,
        description: description,
        details: detailedContent,
        createdAt: month,
        status: status,
        img: img,
      }),
    );
    setInput("");
    setdescripion("");
    editorRef.current?.setContent("");
    dispatch(setShowTodoForm());
    setStatus("Not Started");
    setImg(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded-l-2xl w-[80vw] relative  overflow-auto todo-scroll h-[80vh]">
        <div
          className="absolute top-3 right-4 cursor-pointer "
          onClick={handleCloseForm}
        >
          <X size={20} />
        </div>
        <form
          action=""
          className="flex flex-col justify-center gap-3.5"
          onSubmit={addTask}
        >
          <div className="flex flex-col justify-center gap-1 itmes-start">
            <label htmlFor="title " className="font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder=" Write here... "
              className="p-1  border border-gray-400 rounded outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col justify-center ">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              name=""
              id="description "
              className="  border border-gray-400 rounded outline-none p-1"
              value={description}
              onChange={(e) => setdescripion(e.target.value)}
            ></textarea>
          </div>
          <label htmlFor="">Todo Details </label>
          <TodoEditor ref={editorRef} />
          <div>
            <TakeImg setImg={setImg} img={img} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold">Status</div>
            <div className="flex justify-around items-center gap-2 p-2">
              <div className="flex items-center justify-center gap-1 ">
                <label htmlFor="Not Started" className="text-sm leading-none">
                  Not Started
                </label>
                <input
                  type="radio"
                  name="status"
                  id="Not Started"
                  className="cursor-pointer"
                  value="Not Started"
                  checked={status === "Not Started"}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center gap-1 ">
                <label htmlFor="In Progress" className="text-sm leading-none">
                  In Progress
                </label>
                <input
                  type="radio"
                  name="status"
                  id="In Progress"
                  className="cursor-pointer"
                  value="In Progress"
                  checked={status === "In Progress"}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center gap-1 cursor-pointer">
                <label htmlFor="     Complete" className="text-sm leading-none">
                  Completed
                </label>
                <input
                  type="radio"
                  name="status"
                  id="Complete"
                  className="cursor-pointer"
                  value="Completed"
                  checked={status === "Completed"}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-rose-400 rounded text-white px-1 cursor-pointer">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
