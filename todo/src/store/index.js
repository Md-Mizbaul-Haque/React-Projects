import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
import { LoadState, SaveState } from "./localStore";
import throttle from "lodash/throttle";
import appReducer from '../features/appSlice'


const persistedState = LoadState()|| {};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    app: appReducer
  },
  preloadedState: persistedState,
});
store.subscribe(
  throttle(() => {
    SaveState({
      todos: store.getState().todos,
    });
  }, 1000)
);
