import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchhStatus',
    initialState:{
        fetchDone:false,  // true:'DONE'
        currentlyFetching: false,//false:PENDIND' and
    },
       
    reducers:{
       markFetchDone:(state )=>{
         state.fetchDone = true;
       },
       markFetchingStarted:(state) =>{
         state.currentlyFetching = true;
       },
       markFetchingFinished:(state)=>{
         state.currentlyFetching = false;
       }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

