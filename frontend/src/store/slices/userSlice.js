import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    //reducers here
  },
  extraReducers: (builder) => {
      builder
      .addCase("user/authenticate/fulfilled", (state, action)=> {
        return { ...state, ...action.payload }
      }) 
  },
});
// below export reducers once declared
//export const { reducer1, reducer2 } = userSlice.actions;
export default userSlice.reducer;
