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
    //reducers here,
  }
});

export default tripsSlice.reducer;