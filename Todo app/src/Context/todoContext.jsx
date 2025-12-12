import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodo = localStorage.getItem("todos");
    return storedTodo ? JSON.parse(storedTodo) : [];
  });
  useEffect(() => {
   
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos]);

  console.log(todos);
  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), complete: false,forUpdate:false, todo: todo }]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, todo } : item))
    );
  };
  const forUpdate =(id)=>{
    setTodos((prev)=>(
      prev.map((item)=> item.id === id ? {...item,forUpdate:!item.forUpdate}:item)
    ))
  }
  return (
    <TodoContext.Provider value={{ addTodo, todos, updateTodo,toggleComplete, deleteTodo ,forUpdate}}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
