import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        details: action.payload.details || "",
        createdAt: action.payload.createdAt,
        status: action.payload.status,
        img: action.payload.img,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },

    toggleComplete: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    updateTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, toggleComplete, updateTodo } =
  todoSlice.actions;
