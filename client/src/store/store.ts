import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { authService } from "@/services/user.services";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authService.reducerPath]: authService.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authService.middleware)
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch