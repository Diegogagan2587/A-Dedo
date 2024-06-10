import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navigationLayout: "main-nav",
};

export const navigationSlice = createSlice({
  name:'navigation',
  initialState: initialState,
  reducers: {
    setNavigationLayout: (state, action)=>{
        state.navigationLayout = action.payload;
    }
  }
});

export const { setNavigationLayout } = navigationSlice.actions;
export default navigationSlice.reducer;
