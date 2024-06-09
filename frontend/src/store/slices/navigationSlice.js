import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPath: "",
};

export const navigationSlice = createSlice({
  name:'navigation',
  initialState: initialState,
  reducers: {
    setCurrentPath: (state, action)=>{
        state.currentPath = action.payload;
    }
  }
});

export const { setCurrentPath } = navigationSlice.actions;
export default navigationSlice.reducer;
