import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage"; 

import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";
import authReducer from "./auth/auth-slice";
import persistReducer from "redux-persist/es/persistReducer";

const authConfig ={
  key: "auth",
  storage,
  whitelist: ["token"],
}



export const rootReducer = combineReducers({
  contacts: contactsReducer,
      filter: filterReducer,
      auth: persistReducer(authConfig,authReducer),
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      
})



export const persistor = persistStore(store);