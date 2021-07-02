import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IinitialUserState {
    ChipsArray: any[]
}

export const initialUserState: IinitialUserState={
    ChipsArray: [],

}

const chipReducer = createSlice({
    name: "chipsSlise",
    initialState: initialUserState,
    reducers: {
        addChip(state, actions: PayloadAction<any>) {
            state.ChipsArray = [...state.ChipsArray, actions.payload];
        },
        removeChip(state, actions: PayloadAction<any>) {
            state.ChipsArray = [...state.ChipsArray.filter(item=>item.id !== actions.payload)]
        },
    },
});

export default chipReducer.reducer
export const { addChip,removeChip } = chipReducer.actions;

