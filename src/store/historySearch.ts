import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface historyFilters{
    page: number;
    size: number;
    startDate: string;
    endDate: string;
}

const searchObjectHistory : historyFilters = {
        page: 0,
        size: 15,
        startDate: "",
        endDate: "",
    }




const reduserHistory  = createSlice({
    name: "searchObjectHistory",
    initialState: searchObjectHistory,
    reducers: {
        resetFilteState: state =>  searchObjectHistory,
        setStartDataHistory(state, actions: PayloadAction<string>) {
            state.startDate = actions.payload;
        },
        setEndDataHistory(state, actions: PayloadAction<string>) {
            state.endDate = actions.payload;
        },
        setPageHistory(state, actions: PayloadAction<number>) {
            state.page = actions.payload;
        },
        
    },
});

export default reduserHistory.reducer;
export const {
    resetFilteState,
    setStartDataHistory,
    setPageHistory, 
    setEndDataHistory,
} = reduserHistory.actions; 