import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface historyFilters{
    page: number;
    size: number;
    startDate: string;
    endDate: string;
}

const searchObjectHistorymy = {
        page: 0,
        size: 15,
        startDate: "",
        endDate: "",
}
interface Itime{
    To: any,
    From: any,
}

const time = {
    To: "",
    From: "",
}
interface Iobj{
    time: Itime,
    searchObjectHistory : historyFilters
}


const obj: Iobj ={
    time: time,
    searchObjectHistory : searchObjectHistorymy,
}


const reduserHistory  = createSlice({
    name: "searchObjectHistory",
    initialState: obj,
    reducers: {
        resetFilteState: state =>  obj,
        setStartDataHistory(state, actions: PayloadAction<string>) {
            state.searchObjectHistory.startDate = actions.payload;
        },
        setEndDataHistory(state, actions: PayloadAction<string>) {
            state.searchObjectHistory.endDate = actions.payload;
        },
        setPageHistory(state, actions: PayloadAction<number>) {
            state.searchObjectHistory.page = actions.payload;
        },
        setTimeDatePicker(state, actions: PayloadAction<any>) {
            state.time = actions.payload;
        },
        
    },
});

export default reduserHistory.reducer;
export const {
    resetFilteState,
    setStartDataHistory,
    setPageHistory, 
    setEndDataHistory,
    setTimeDatePicker,
} = reduserHistory.actions; 