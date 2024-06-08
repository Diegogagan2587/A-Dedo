import { createAsyncThunk } from '@reduxjs/toolkit';
import { VITE_API_URL_BASE as API_URL_BASE } from '../../config';

const getTrips = createAsyncThunk('trips/get', async ()=> {
  const response = await fetch(`${API_URL_BASE}/trips`)
  const data  = await response.json()
  return data;
});

export default getTrips;