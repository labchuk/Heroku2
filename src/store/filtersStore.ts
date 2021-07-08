import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface IinitialUserState {
    category: any[],
    vendor: any[],
    vendorLocation: any[],
    subCategory: any[]
}

export const initialUserState: IinitialUserState={
    category: [],
    vendor: [],
    vendorLocation: [],
    subCategory: []
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
        addVendor(state, actions: PayloadAction<any>) {
            state.vendor = [...actions.payload];
        },
        addSubCategory(state, actions: PayloadAction<any>) {
            state.subCategory = [...actions.payload];
        },
        removeSubCategory(state, actions: PayloadAction<any>) {
            state.subCategory = [...state.subCategory.filter(item=>item.id !== actions.payload)]
        },
        removeVendor(state, actions: PayloadAction<any>) {
            state.vendor = [...state.vendor.filter(item=>item.id !== actions.payload)]
        },
        addVendorLocation(state, actions: PayloadAction<any>) {
            state.vendorLocation = [...actions.payload];
        },
        removeVendorLocation(state, actions: PayloadAction<any>) {
            state.vendorLocation = [...state.vendorLocation.filter(item=>item.id !== actions.payload)];
        },
    },
});

export default filtersReducer.reducer
export const { addCategory,removeCategory, addVendor, removeVendor, addVendorLocation, removeVendorLocation, removeSubCategory, } = filtersReducer.actions;