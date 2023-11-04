import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk,refreshThunk, logOutThunk } from './auth-operations';

const INITIAL_STATE = {
  token: null,
  user:{
    email:null,
    name: null,
  },
  authenticated: false,
  isLoading: false,
  error: null,
}
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder => builder
  .addCase(
    registerThunk.pending,handlePending
  )
  .addCase(
    registerThunk.fulfilled,(state, action) => {
              state.isLoading = false;
              state.authenticated = true;
              state.token = action.payload.token;
              state.user = action.payload.user;
            }
  )
  .addCase(
    registerThunk.rejected, handleRejected
  )
  .addCase(
    loginThunk.pending,handlePending
  )
  .addCase(
    loginThunk.fulfilled,(state, action) => {
              state.isLoading = false;
              state.authenticated = true;
              state.token = action.payload.token;
              state.user = action.payload.user;
            }
  )
  .addCase(
    loginThunk.rejected, handleRejected
  )
  .addCase(
    refreshThunk.pending,handlePending
  )
  .addCase(
    refreshThunk.fulfilled,(state, action) => {
              state.isLoading = false;
              state.authenticated = true;
              state.user = action.payload;
            }
  )
  .addCase(
    refreshThunk.rejected, handleRejected
  )
  .addCase(
    logOutThunk.pending,handlePending
  )
  .addCase(
    logOutThunk.fulfilled,() => {
             return INITIAL_STATE;
            }
  )
  .addCase(
    logOutThunk.rejected, handleRejected
  )
 
})

const authReducer = authSlice.reducer;
export default authReducer;



// оптимізування коду

/*
1) import { isAnyOf } from '@reduxjs/toolkit';
2) об'єднати всі pending
.addMatcher(
    isAnyOf(logOutThunk.pending,
      registerThunk.pending,
      loginThunk.pending,
      refreshThunk.pending
      ),
      state => {
  state.isLoading = true;
  state.error = null;
};
  )
3) і об'єднати всі rejected
  .addMatcher(
    isAnyOf(logOutThunk.rejected,
      registerThunk.rejected,
      loginThunk.rejected,
      refreshThunk.rejected
      ),
      state => {
  state.isLoading = false;
  state.error = action.payload;
};
  )


 */