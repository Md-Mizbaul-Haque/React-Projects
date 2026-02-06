import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  showTodoForm: false,
  showDiscardPage:false
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowTodoForm: (state) => {
      state.showTodoForm = !state.showTodoForm;
    },
    setShowDiscardPage:(state)=>{
      state.showDiscardPage = !state.showDiscardPage
    }
  },
});

export const { setShowTodoForm ,setShowDiscardPage } = appSlice.actions;
export default appSlice.reducer;
