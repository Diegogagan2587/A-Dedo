import { createAsyncThunk } from "@reduxjs/toolkit";
import { VITE_API_URL_BASE as API_URL_BASE} from "../../config";

const reserveTrip = createAsyncThunk(
  'trip/reserve',
  async (reservation) => {
    const response = await fetch(`${API_URL_BASE}/trips/reserve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({reservation})
    });

    const data = await response.json();
    return data;
  }
);

export default reserveTrip;