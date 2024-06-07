import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import tripsReducer from "./slices/tripsSlice"

const store = configureStore({
    reducer: {
      // slices here
      user: userReducer,
      trips: tripsReducer,
    }
})

export default store;