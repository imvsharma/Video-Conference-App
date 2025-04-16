/* eslint-disable @typescript-eslint/no-explicit-any */
// Using RTK Query for intracting with apis

import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { RootState} from '@/store/store'

export const authService = createApi({
  reducerPath: 'authService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.userToken
      if(token) {
        headers.set('authorization', `Bearer ${token}`)
        return headers
      }
    },
  }),
  endpoints: (build) => ({
    getUserDetails: build.query({
      query: (email) => ({
        url: `users?email=${email}`,
        method: 'GET'
      })
    })
  })
})

export const { useGetUserDetailsQuery } = authService