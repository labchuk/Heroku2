import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface IinitialUserState {
        email: string,
        userId: string,
        admine: boolean,
        isAuth: boolean,
        location: string,
        userName:string,

};

export const initialUserState: IinitialUserState={
    userId: "",
    isAuth : false,
    email: "",
    admine: false,
    location: "",
    userName: "",
};

export const userSlise = createSlice({
    name: "userSlise",
    initialState: initialUserState,
    reducers: {
        setEmail(state, actions: PayloadAction<string>) {
            state.email = actions.payload;
        },
        setUserId(state, actions: PayloadAction<string>) {
            state.userId = actions.payload;
        },
        setIsAuth(state, actions: PayloadAction<boolean>) {
            state.isAuth = actions.payload;
        },
        setAdmine(state, actions: PayloadAction<boolean>) {
            state.admine = actions.payload;
        },
        setUserName(state, actions: PayloadAction<string>) {
            state.userName = actions.payload;
        },
        setLocation(state, actions: PayloadAction<string>) {
            state.location = actions.payload;
        },
    },
});




export default userSlise.reducer
export const { setEmail, setUserId, setIsAuth, setAdmine, setUserName, setLocation } = userSlise.actions;