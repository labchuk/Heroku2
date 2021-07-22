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
interface IinitialState {
    category: any[],
    vendor: any[],
    vendorLocation: any[],
    subCategory: any[],
    discounds: any[],
    numberOfElements: number
    searchObject: IdiscountFilter
}

export const initialFiltersState: IinitialState={
    category: [],
    vendor: [],
    vendorLocation: [],
    subCategory: [],
    discounds: [],
    numberOfElements: 0,
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
    initialState: initialFiltersState,
    reducers: {
        resetFilteState: state =>  initialFiltersState,
        setSearchObject(state, actions: PayloadAction<any>) {
            state.searchObject = {...state.searchObject, ...actions.payload};
        },
        setNumberOfElements(state, actions: PayloadAction<number>) {
            state.numberOfElements = actions.payload;
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
        addNewCategory(state, actions: PayloadAction<any>) {
            state.category = [...state.category ,actions.payload];
        },
        
        addNewVendor(state, actions: PayloadAction<any>) {
            state.vendor = [...state.vendor,actions.payload];
        },
        
        addNewDiscounds(state, actions: PayloadAction<any>) {
            state.discounds = [...state.discounds,actions.payload];
        },
        addNewSubCategory(state, actions: PayloadAction<any>) {
            state.subCategory = [...state.subCategory,actions.payload];
        },
        
        addNewVendorLocation(state, actions: PayloadAction<any>) {
            state.vendorLocation = [...state.vendorLocation,actions.payload];
        },
        
    },
});

export default filtersReducer.reducer
export const { addCategory,setNumberOfElements, addVendor,addNewCategory,addSubCategory, addNewSubCategory,addNewVendorLocation,addNewDiscounds, addNewVendor,addVendorLocation,resetFilteState, addDiscounds, setSearchWord, setSearchObject, setSearchObjectPage} = filtersReducer.actions;