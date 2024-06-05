import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
      // slices here
      user: userReducer,
    }
})

export default store;