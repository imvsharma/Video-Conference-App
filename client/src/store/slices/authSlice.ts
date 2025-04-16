import { jwtDecode } from 'jwt-decode'
/* eslint-disable @typescript-eslint/no-explicit-any */
import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import {registeredUser, userLogin} from '../actions/auth.action';
import { removeFromLocalStorage } from '@/utils/localStorage';
import { CONSTANT } from '@/config/constant';

const userToken = localStorage.getItem(CONSTANT.TOKEN_KEY)

let userInfo = null
if(userToken) {
  const userdata = jwtDecode(userToken) as any
  userInfo = userdata.user
}


type AuthStateType = {
  loading: boolean;
  userInfo: any;
  userToken: any;
  error: any;
  success: boolean;
}

const initialState: AuthStateType = {
  loading: false,
  userInfo: userInfo,
  userToken: userToken,
  error: null,
  success: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state: AuthStateType) => {
      removeFromLocalStorage(CONSTANT.TOKEN_KEY)
      state.userInfo = null
      state.loading = false
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, {payload}) => {
      state.userInfo = payload
    }
  },
  extraReducers: (builder:ActionReducerMapBuilder<AuthStateType>) => {
    builder
    .addCase(registeredUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(registeredUser.fulfilled, (state) => {
      state.loading = false
      state.success = true
    })
    .addCase(registeredUser.rejected, (state, {payload}) => {
      state.loading = false
      state.error = payload
    })
    .addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null
    })
    .addCase(userLogin.fulfilled, (state, {payload}) => {
      console.log(payload)
      state.loading = false
      state.success = true
      state.userInfo = payload
      state.userToken = payload.access_token
    })
    .addCase(userLogin.rejected, (state, {payload}) => {
      state.loading = false
      state.error = payload
    })
  }
})

export default authSlice
export const {logout, setCredentials} = authSlice.actions