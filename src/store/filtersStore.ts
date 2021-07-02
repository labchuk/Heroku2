import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface IinitialUserState {
    category: any[]
}

export const initialUserState: IinitialUserState={
    category: [],
}

const filtersReducer = createSlice({
    name: "filtersSlise",
    initialState: initialUserState,
    reducers: {
        addCategory(state, actions: PayloadAction<any>) {
            state.category = [...actions.payload];
        },
        removeCategory(state, actions: PayloadAction<any>) {
            state.category = [...state.category.filter(item=>item.id !== actions.payload)]
        },
    },
});

export default filtersReducer.reducer
export const { addCategory,removeCategory } = filtersReducer.actions;