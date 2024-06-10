import { createAsyncThunk } from '@reduxjs/toolkit';
import { VITE_API_URL_BASE as API_URL_BASE } from '../../config';

const createTrip = createAsyncThunk(
  'trip/create',
  async (trip, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL_BASE}/trip/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trip),
      });

      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
    } catch (err) {
      return rejectWithValue({ error: err });
    }
  }
);

export default createTrip;
