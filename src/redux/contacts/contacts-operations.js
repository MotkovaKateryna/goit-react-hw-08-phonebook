import { createAsyncThunk } from "@reduxjs/toolkit";
 import {requestAllContacts, requestAddContact, requestDeleteContact} from "../../shared/services/phonebookAPI"



export const fetchAllContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try{
            const data = await  requestAllContacts();
            return data;
        } catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
   }
)

export const addContact = createAsyncThunk(
    "contacs/addContact",
    async (contact,thunkAPI) => {
        try{
            const data = await requestAddContact(contact);
            console.log(data);
            return data;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }

    }

)
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try{
            const data = await requestDeleteContact(contactId);
            return data;

        } catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)