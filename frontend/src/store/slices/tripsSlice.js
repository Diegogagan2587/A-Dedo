import { createSlice } from "@reduxjs/toolkit";
const trips = {
  new: {
    origin:{
      address:"",
      city:"",
      postalCode:"",
      startDate:"",
      startTime:"",
    },
    destination: {
      address:"",
      city:"",
      postalCode:"",
      endDate:"",
      endTime:"",
    },
    seats: 0,
    price: 0,
    stops:false,
    pets:false,
    childrens:false,
    acceptFood:false,
    notes:"",
    passengers:[],
  }
}

export const tripsSlice = createSlice({
  name: "trips",
  initialState: trips,
  reducers:{
    setOrigin: (state, action) => {
      console.log('setOriging: updating origin')
      console.log(action.payload)
      state.new.origin = action.payload;
    },
  }
});

export const { setOrigin } = tripsSlice.actions;
export default tripsSlice.reducer;