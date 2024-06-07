import { createAsyncThunk } from "@reduxjs/toolkit";
import { VITE_API_URL_BASE as API_URL_BASE} from "../../config";

const registerUser = createAsyncThunk('user/register', async (user,{ rejectWithValue })=>{
    try{
      const response = await fetch(`${API_URL_BASE}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
      const data = await response.json();
      if(response.ok) {
        return data
      } else {
        return rejectWithValue({error: data.status.message});
      }
    } catch(error){
      return rejectWithValue({ error: 'An error occurred'});
    }
})

export default registerUser;