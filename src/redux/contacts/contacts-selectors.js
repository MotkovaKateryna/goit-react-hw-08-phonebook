import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter/filter-selectors";



export const selectAllContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


export const selectVisibleContacts = createSelector(
  [ selectAllContacts, selectFilter],
   (contacts, filter) => {
    // console.log("Calculating task count. Now memoized!");
     return contacts.filter(contact => contact.name.toLowerCase()
      .includes(filter.toLowerCase()))
   }
  )