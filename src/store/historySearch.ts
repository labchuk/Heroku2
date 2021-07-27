import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';



interface Itime{
    To: any,
    From: any,
}


interface historyFilters{
    page: number,
    size: number,
    startDate: string,
    endDate: string,
    time: Itime,
}

const obj: historyFilters ={
    time: {
        To: "",
        From: "",
    },  
    page: 0,
    size: 15,
    startDate: "",
    endDate: "",
}


const reduserHistory  = createSlice({
    name: "name",
    initialState: obj,
    reducers: {
        resetHistory: state =>  obj,
        setStartDataHistory(state, actions: PayloadAction<string>) {
            state.startDate = actions.payload;
        },
        setEndDataHistory(state, actions: PayloadAction<string>) {
            state.endDate = actions.payload;
        },
        setPageHistory(state, actions: PayloadAction<number>) {
            state.page = actions.payload;
        },
        setTimeDatePicker(state, actions: PayloadAction<any>) {
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