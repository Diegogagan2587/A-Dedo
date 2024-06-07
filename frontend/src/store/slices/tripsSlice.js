import { createSlice } from "@reduxjs/toolkit";
const initialTripForm = {
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
};

const trips = {
  new: initialTripForm,
  list: []
}

export const tripsSlice = createSlice({
  name: "trips",
  initialState: trips,
  reducers:{
    setOrigin: (state, action) => {
      state.new.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.new.destination = action.payload;
    },
    setAvailableSeats: (state,action) => {
      state.new.seats = action.payload;
    },
    setAdditionalOptions: (state,action) => {
      state.new = {...state.new, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase('trip/create/fulfilled', (state, action) => {
      state.new = initialTripForm;
      state.list = [
        ...state.list,
        action.payload
      ];
    })
  },
});

export const { setOrigin, setDestination, setAvailableSeats, setAdditionalOptions } = tripsSlice.actions;
export default tripsSlice.reducer;