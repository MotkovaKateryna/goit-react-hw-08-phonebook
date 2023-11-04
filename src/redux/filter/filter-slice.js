import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    filter:'',
}

const filterSlice = createSlice({
    name:"filter",
    initialState: INITIAL_STATE,
    reducers: {
        setFilter: (state,{payload}) => {state.filter = payload},
    },
});

export const {setFilter} = filterSlice.actions;

const filterReducer =filterSlice.reducer;

export default  filterReducer;
