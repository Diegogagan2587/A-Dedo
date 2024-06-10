import { createAsyncThunk } from '@reduxjs/toolkit';
import { VITE_API_URL_BASE as API_URL_BASE } from '../../config';

const postAuthData = async (data) => {
  const response = await fetch(`${API_URL_BASE}/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

const authenticateUser = createAsyncThunk('user/authenticate', async (user, { rejectWithValue }) => {
  try {
    const response = await postAuthData(user);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      if (response.status === 404 || response.status === 401) {
        console.error(data.error);
        return rejectWithValue({ error: data.error });
      }
    }
  } catch (err) {
    console.error('Login Failed:', err);
    return rejectWithValue({ error: 'Login Failed' });
  }
});

export default authenticateUser;
