import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface IdiscountFilter{
    page: number;
    size: number;
    vendorIds: string[];
    categoryId: string;
    country: string;
    city: string;
    searchWord: string;
    subCategoriesIds: string[];
}
interface IinitialUserState {
    category: any[],
    vendor: any[],
    vendorLocation: any[],
    subCategory: any[],
    discounds: any[],
    searchObject: IdiscountFilter
}

export const initialUserState: IinitialUserState={
    category: [],
    vendor: [],
    vendorLocation: [],
    subCategory: [],
    discounds: [],
    searchObject: {
        page: 0,
        size: 15,
        vendorIds:[],
        categoryId: "",
        country: "",
        city: "",
        searchWord: "",
        subCategoriesIds: [],
    }
}

const filtersReducer = createSlice({
    name: "filtersSlise",
    initialState: initialUserState,
    reducers: {
        setSearchObject(state, actions: PayloadAction<any>) {
            state.searchObject = {...state.searchObject, ...actions.payload};
        },
        setSearchObjectPage(state, actions: PayloadAction<number>) {
            state.searchObject.page = actions.payload;
        },
        setSearchWord(state, actions: PayloadAction<any>) {
            state.searchObject.searchWord = actions.payload;
        },
        addCategory(state, actions: PayloadAction<any>) {
            state.category = [...actions.payload];
        },
        
        addVendor(state, actions: PayloadAction<any>) {
            state.vendor = [...actions.payload];
        },
        
        addDiscounds(state, actions: PayloadAction<any>) {
            state.discounds = [...actions.payload];
        },
        addSubCategory(state, actions: PayloadAction<any>) {
            state.subCategory = [...actions.payload];
        },
        
        addVendorLocation(state, actions: PayloadAction<any>) {
            state.vendorLocation = [...actions.payload];
        },
        
    },
});

export default filtersReducer.reducer
export const { addCategory, addVendor,  addVendorLocation, addDiscounds, setSearchWord, setSearchObject, setSearchObjectPage} = filtersReducer.actions;