import { createAsyncThunk } from "@reduxjs/toolkit";
import {requestRegister,requestLogin,requestLogout,requestRefreshUser, setToken} from "../../shared/services/phonebookAPI";


export const loginThunk = createAsyncThunk(
    "auth/login",
    async (formData, thunkAPI) => {
        try{
            const response = await requestLogin(formData);
            // console.log('response:',response);
            return response;
        } catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
   }
)

export const registerThunk = createAsyncThunk(
    "auth/register",
    async (formData, thunkAPI) => {
        try{
            const response = await requestRegister(formData);
            // console.log('response:',response);
            return response;
        } catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
   }
)

export const refreshThunk = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {

        const state = thunkAPI.getState();
        const token = state.auth.token;
        try{
            setToken(token);
            const response = await requestRefreshUser();

            console.log('response:',response);
            return response;
        } catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
   },{
    condition: (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        if (!token) return false;
        return true;

    }
   }
)


export const logOutThunk = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try{
         await requestLogout();
            
            return ;
        } catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
   }
)