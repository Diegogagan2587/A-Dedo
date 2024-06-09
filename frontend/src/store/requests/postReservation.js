import { createAsyncThunk } from '@reduxjs/toolkit';
import { VITE_API_URL_BASE as API_URL_BASE } from '../../config';

const postReservation = createAsyncThunk('reservation/post', async (reservation, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL_BASE}/reservation/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return rejectWithValue({ error: data.status.message });
    }
  } catch (error) {
    return rejectWithValue({ error: 'An error occurred' });
  }
});
export default postReservation;
