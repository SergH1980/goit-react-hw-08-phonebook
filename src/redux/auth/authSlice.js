import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, fetchCurrentUser, register } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetching: false,
  error: null,
};
const handleRejected = (state, action) => {
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetching = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetching = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isFetching = false;
      }),
});

export const authReducer = authSlice.reducer;
