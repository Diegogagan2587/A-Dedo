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
  list: [
    {
      origin: {
        address: 'Platano 1',
        city: 'Ciudad Gotica',
        postalCode: '111111',
        date: '2024-08-02T00:00:00.000Z',
        time: '22:27'
      },
      destination: {
        address: 'Cacao 1',
        city: 'Ciudad Gotica',
        postalCode: '222222',
        date: '2024-08-02T00:00:00.000Z',
        time: '22:28'
      },
      seats: 3,
      price: 0,
      stops: true,
      pets: true,
      childrens: true,
      acceptFood: true,
      notes: 'un refresco por favor',
      passengers: [],
      messages_trip: [],
      calification: [],
      _id: '66628c4ca155835ca4df9bdb',
      __v: 0
    },
    {
      origin: {
        address: 'Platano 2',
        city: 'Ciudad Gotica',
        postalCode: '111111',
        date: '2024-08-02T00:00:00.000Z',
        time: '22:27'
      },
      destination: {
        address: 'Cacao 2',
        city: 'Ciudad Gotica',
        postalCode: '222222',
        date: '2024-08-02T00:00:00.000Z',
        time: '22:28'
      },
      seats: 3,
      price: 0,
      stops: true,
      pets: true,
      childrens: true,
      acceptFood: true,
      notes: 'un refresco por favor',
      passengers: [],
      messages_trip: [],
      calification: [],
      _id: '66628c4ca155835ca4df9bxb',
      __v: 0
    },
    {
      origin: {
        address: 'Guineo 1',
        city: 'Saltadilla',
        postalCode: '111111',
        date: '2024-06-22T00:00:00.000Z',
        time: '22:27'
      },
      destination: {
        address: 'Cacao 1',
        city: 'Saltadilla',
        postalCode: '222222',
        date: '2024-06-02T00:00:00.000Z',
        time: '22:28'
      },
      seats: 3,
      price: 0,
      stops: true,
      pets: true,
      childrens: true,
      acceptFood: true,
      notes: 'un refresco por favor',
      passengers: [],
      messages_trip: [],
      calification: [],
      _id: '66628c4ca155835ca4df9bdc',
      __v: 0
    },
    {
      origin: {
        address: 'Guineo 5',
        city: 'Saltadilla 5',
        postalCode: '55555',
        date: '2024-05-22T00:00:00.000Z',
        time: '22:27'
      },
      destination: {
        address: 'Cacao 1',
        city: 'Saltadilla',
        postalCode: '222222',
        date: '2024-05-02T00:00:00.000Z',
        time: '22:28'
      },
      seats: 3,
      price: 0,
      stops: true,
      pets: true,
      childrens: true,
      acceptFood: true,
      notes: 'un refresco por favor',
      passengers: [],
      messages_trip: [],
      calification: [],
      _id: '66628c4ca155835ca4df9zdh',
      __v: 0
    }
  ]
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