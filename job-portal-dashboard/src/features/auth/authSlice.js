import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    role: '',
    };

    const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
        state.user = action.payload.user;
        state.role = action.payload.role;
        },
        logout: (state) => {
        state.user = null;
        state.role = '';
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
