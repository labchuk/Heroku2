import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface historyFilters{
    page: number;
    size: number;
    startDate: string;
    endDate: string;
}


interface Itime{
    To: any,
    From: any,
}


interface Iobj{
    time: Itime,
    searchObjectHistory : historyFilters
}


const obj: Iobj ={
    time: {
        To: "",
        From: "",
    },
    searchObjectHistory : {
        page: 0,
        size: 15,
        startDate: "",
        endDate: "",
    },
}


const reduserHistory  = createSlice({
    name: "searchObjectHistory",
    initialState: obj,
    reducers: {
        resetHistory: state =>  obj,
        setStartDataHistory(state, actions: PayloadAction<string>) {
            state.searchObjectHistory.startDate = actions.payload;
        },
        setEndDataHistory(state, actions: PayloadAction<string>) {
            state.searchObjectHistory.endDate = actions.payload;
        },
        setPageHistory(state, actions: PayloadAction<number>) {
            console.log(state.searchObjectHistory)
            state.searchObjectHistory.page = actions.payload;
        },
        setTimeDatePicker(state, actions: PayloadAction<any>) {
            console.log(state.time)
            state.time = actions.payload;
        },
        
    },
});

export default reduserHistory.reducer;

export const {
    resetHistory,
    setStartDataHistory,
    setPageHistory, 
    setEndDataHistory,
    setTimeDatePicker,
} = reduserHistory.actions; 