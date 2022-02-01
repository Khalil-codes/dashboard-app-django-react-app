import { createSlice } from '@reduxjs/toolkit';

import jwtDecode from 'jwt-decode';

const INITIAL_TOKENS = localStorage.getItem('authTokens')
    ? JSON.parse(localStorage.getItem('authTokens'))
    : null;
const INITIAL_USER = INITIAL_TOKENS?.access
    ? jwtDecode(INITIAL_TOKENS.access)
    : null;

const authSlice = createSlice({
    name: 'user',
    initialState: {
        authTokens: INITIAL_TOKENS,
        user: INITIAL_USER,
    },
    reducers: {
        saveUser: (state, action) => {
            return { ...state, user: action.payload };
        },
        removeUser: (state, action) => {
            return { ...state, user: null };
        },
        saveAuthTokens: (state, action) => {
            return { ...state, authTokens: action.payload };
        },
        removeAuthTokens: (state, action) => {
            return { ...state, authTokens: null };
        },
    },
});

export const { saveUser, removeUser, saveAuthTokens, removeAuthTokens } =
    authSlice.actions;
export default authSlice.reducer;
