import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import firebase from "firebase";

type InitialState = {
    user: firebase.User | null;
    userIsReady: boolean;
}

const initialState: InitialState = {
    user: null,
    userIsReady: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<firebase.User | null>) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        },
        authIsReady: (state, action: PayloadAction<firebase.User | null>) => {
            state.userIsReady = true;
            state.user = action.payload;
        }
    }
})

export const {loginUser, logoutUser, authIsReady} = userSlice.actions;
export default userSlice.reducer;