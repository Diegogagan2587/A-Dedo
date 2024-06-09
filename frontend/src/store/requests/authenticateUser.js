import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
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

const authenticateUser = createAsyncThunk('user/authenticate', async (user) => {
  try {
    const response = await postAuthData(user);
    const data = await response.json();
    console.log("response -->",await data)
    if (response.ok) {
      return data;
    } else {
      if( response.status === 404 ) {
        console.log(data.error);
        return isRejectedWithValue({error: data.error});
      }
    }
  } catch (err) {
    return { error: 'Login Failed'};
  }
});

export default authenticateUser;
