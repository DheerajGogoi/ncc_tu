import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialAuth = {
    admin: null,
    loggedIn: false
}

const adminAuthSlice = createSlice({
    initialState: initialAuth,
    name: "adminAuth",
    reducers: {
        login(state, action){
            state.loggedIn = true;
            state.admin = action.payload;
        },
        logout(state, action){
            state.loggedIn = false;
            state.admin = null;
        }
    }
})

export const adminAuthActions = adminAuthSlice.actions;

const store = configureStore({
    reducer: {
        adminAuth: adminAuthSlice.reducer
    }
})

export default store;