import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import tripsReducer from "./slices/tripsSlice"
import navigationReducer from "./slices/navigationSlice"

const store = configureStore({
    reducer: {
      // slices here
      user: userReducer,
      trips: tripsReducer,
      navigation: navigationReducer,
    }
})

export default store;