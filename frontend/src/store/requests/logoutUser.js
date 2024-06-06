import { createAsyncThunk } from '@reduxjs/toolkit';
import { VITE_API_URL_BASE as API_URL_BASE } from '../../config';

const logoutUser = createAsyncThunk('user/logout', async (user) => {
  await fetch(`${API_URL_BASE}/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
});

export default logoutUser;
