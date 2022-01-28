import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'user',
    initialState: {
        loading: true,
        user: null,
    },
    reducers: {
        saveUser: (state, action) => {
            return { loading: false, user: action.payload };
        },
        removeUser: (state, action) => {
            return { loading: true, user: null };
        },
    },
});

export const { saveUser, removeUser } = authSlice.actions;
export const selectUser = (state) => state.user.user;
export default authSlice.reducer;
