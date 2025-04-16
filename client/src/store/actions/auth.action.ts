import { CONSTANT } from '@/config/constant';
import { setToLocalStorage } from '@/utils/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const backendUserMSUrl = 'http://127.0.0.1:3000/users/'
const backendLoginUrl = 'http://127.0.0.1:3001/auth/login/'
const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}

export const registeredUser = createAsyncThunk('auth/register', async ({name, email, password}: {name: string, email: string, password: string}, {rejectWithValue}) =>{
  try {
    const user = await axios.post(backendUserMSUrl, {name, email, password}, config)
    console.log(user)
    //return user
  } catch (error) {
    rejectWithValue(error)
  }
})

export const userLogin = createAsyncThunk('auth/login', async ({email, password}: {email: string, password: string}, {rejectWithValue}) => {
  try {
    const loggedInUser = await axios.post(backendLoginUrl, {email, password}, config)
    setToLocalStorage(CONSTANT.TOKEN_KEY, loggedInUser?.data?.access_token)
    return loggedInUser.data
  } catch (error) {
    rejectWithValue(error)
  }
})