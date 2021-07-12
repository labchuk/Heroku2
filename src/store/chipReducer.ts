import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';
import ChipsArray from "../components/common/ChipsArray/ChipsArray";

interface IinitialUserState {
    ChipsArray: any[]
    ChipsArrayStatistic: any[]
}

export const initialUserState: IinitialUserState={
    ChipsArrayStatistic: [],
    ChipsArray: [],



}

const chipReducer = createSlice({
    name: "chipsSlise",
    initialState: initialUserState,
    reducers: {
        addChipMain(state, actions: PayloadAction<any>) {
            state.ChipsArray = AddChip(state.ChipsArray,actions)
        },
        addChipStatistic(state, actions: PayloadAction<any>) {
            state.ChipsArrayStatistic = AddChip(state.ChipsArrayStatistic,actions)
        },
        removeChipMain(state, actions: PayloadAction<any>) {
            state.ChipsArray = [...state.ChipsArray.filter(item=>Object.keys(item)[0] !== actions.payload)]
        },
        updateChipMain(state, actions: PayloadAction<any>) {
            state.ChipsArray = [...state.ChipsArray.filter(item=>Object.keys(item)[0] == actions.payload)]
        },
        updateChipStatistic(state, actions: PayloadAction<any>) {
            state.ChipsArrayStatistic = [...state.ChipsArrayStatistic.filter(item=>Object.keys(item)[0] == actions.payload)]
        },
        removeChipStatistic(state, actions: PayloadAction<any>) {
            if (state.ChipsArrayStatistic) state.ChipsArrayStatistic = [...state.ChipsArrayStatistic.filter(item=>Object.keys(item)[0] !== actions.payload)]
        },
        removeCategoryMain(state, actions: PayloadAction<any>) {
            state.ChipsArray = removeChip(state.ChipsArray,actions)
        },
        removeCategoryStatistic(state, actions: PayloadAction<any>) {
            state.ChipsArrayStatistic = removeChip(state.ChipsArrayStatistic,actions)
        }
    },
});

export const AddChip = (df:any,actions:any) => {
    if (Array.isArray(actions.payload)){
         return [...df.map((item:any)=>{
            if (item.id === actions.payload[1]){
                return {[Object.keys(item)[0]]:[...item[Object.keys(item)[0]], actions.payload[0]],name: item.name, id:item.id}
            }
            else return item
        })]
    }else {
        if (df) return [ ...df, actions.payload];
        else return [actions.payload]

    }
}
export const removeChip = (chip:any,actions:any) => {
    return [...chip.map((item:any)=>{
        if (item.id === actions.payload.id){
            return {[Object.keys(item)[0]]:[...item[Object.keys(item)[0]].filter((itemSub:any)=>itemSub !== actions.payload.name)],name: item.name, id:item.id}
        }
        else return item
    })]
}

export default chipReducer.reducer
export const { addChipMain,removeChipMain,removeCategoryMain, addChipStatistic,removeChipStatistic, removeCategoryStatistic,updateChipMain,updateChipStatistic } = chipReducer.actions;