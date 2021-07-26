import { configureStore } from "@reduxjs/toolkit";
import userSlise from "./userSlise";
import chipReducer from "./chipReducer";
import filtersReducer from "./filtersStore"
import reduserHistory from "./historySearch"
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import {PersistGate} from "redux-persist/integration/react";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

export const MyPersistGate: any = PersistGate;


const persistConfig = {
  key: 'root',
  storage,
};


export const reducers = combineReducers({
  user: userSlise,
  chips: chipReducer,
  filters: filtersReducer,
  historyObj: reduserHistory,
},);



const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
     reducer: persistedReducer,
     middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;