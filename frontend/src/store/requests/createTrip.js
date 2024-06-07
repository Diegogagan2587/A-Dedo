import { createAsyncThunk } from "@reduxjs/toolkit";
import { VITE_API_URL_BASE as API_URL_BASE} from "../../config";

const createTrip = createAsyncThunk(
  'trip/create',
  async (trip) => {
    const response = await fetch(`${API_URL_BASE}/trip/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trip)
    });

    const data = await response.json();
    return data;
  }
);

export default createTrip;