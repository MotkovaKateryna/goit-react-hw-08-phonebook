import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const contactsInstance = axios.create ({
    baseURL: "https://653a0888e3b530c8d9e900b4.mockapi.io/contacts"
})

export const fetchAllContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try{
            const {data} = await contactsInstance.get("/");
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
            const {data} = await contactsInstance.post("/", contact);
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
            const {data} = await contactsInstance.delete(`/${contactId}`);
            return data;

        } catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)


// export const addContact = async (data) => {
//  const {data:result} = await contactsInstance.post("/",data);
//  return result;
// }

// export const  deleteContact = async(id) => {
//     const {data} = await contactsInstance.delete(`/${id}`);
//     return data;
// }

// import { getAllContacts, addContact, deleteContact } from "shared/services/contacts";
// import { fetchAddContactError, fetchAddContactLoading, fetchAddContactSuccess, fetchAllContactsError, fetchAllContactsLoading, fetchAllContactsSuccess, fetchDeleteContactError, fetchDeleteContactLoading, fetchDeleteContactSuccess } from "./contacts-action";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// export const fetchAllContacts = () =>{
//     const func = async (dispatch) => {

//     try {
// dispatch(fetchAllContactsLoading());
// const data = await getAllContacts();
// console.log(data);
// dispatch(fetchAllContactsSuccess(data));
//     }
//     catch({response}){
//         dispatch(fetchAllContactsError(response.data.message));
//     }

//     }
//     return func;
// }
// const isDublicate = (contacts,{name}) => {
//     const normalizedName = name.toLowerCase();
//     const contact = contacts.find(({ name }) => {
//       return name.toLowerCase() === normalizedName;
//     });
//     return Boolean(contact);
//   }

// export const fetchAddContact = (data,getState) => {
//     const func = async (dispatch) => {
//         try{
//             const {contacts} = getState();
//             if (isDublicate(contacts.items, data)){
//                 Notify.warning(`${data.name} is already in contacts`);
//                 return false;
//             }
//             dispatch(fetchAddContactLoading());
//             const result = await addContact(data);
//             dispatch(fetchAddContactSuccess(result));
//         }
//         catch({response}){
//           dispatch(fetchAddContactError(response.data.message))
//         }
//     }
//     return func;
// }
// export const fetchDeleteContact  = (id) =>{
//  const func = async (dispatch)=>{
// try{
//     dispatch(fetchDeleteContactLoading());
//     await deleteContact(id);
//     dispatch(fetchDeleteContactSuccess(id));
// }
// catch({response}){
//     dispatch(fetchDeleteContactError(response.data.message))
//   }

//  }
//  return func;
// }