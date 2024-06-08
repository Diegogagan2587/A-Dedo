import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  new:{
    fullName:"",
    email:"",
    phone:"",
    password:"",
    terms:false,
  }, 
  error:"",
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setFullName: (state,action) =>{
      state.new.fullName =action.payload;
    },
    setEmail: (state,action) =>{
      state.new.email =action.payload;
    },
    setPhone: (state,action) =>{
      state.new.phone =action.payload;
    },
    setPassword: (state,action) =>{
      const {passwordA, passwordB } = action.payload;
      if(passwordA === passwordB){
        state.new.password = action.payload.passwordA
      } else {
        state.error = "Password mismatch"
      }
    },
    acceptTerms: (state, action) => {
      state.new.terms = action.payload;
    },
  },
  extraReducers: (builder) => {
      builder
      .addCase("user/authenticate/fulfilled", (state, action)=> {
        return { ...state, ...action.payload }
      }) 
  },
});

export const { setFullName, setEmail, setPhone, setPassword, acceptTerms } = userSlice.actions;
export default userSlice.reducer;
