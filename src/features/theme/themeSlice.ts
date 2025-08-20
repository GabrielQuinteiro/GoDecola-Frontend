import { createSlice } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
    mode: ThemeMode;
}

const getInitialTheme = (): ThemeMode => {
    const savedTheme = localStorage.getItem('themeMode')
    return savedTheme === 'dark' ? 'dark' : 'light';
}

const initialState : ThemeState = {
    mode: getInitialTheme(),
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            const newMode = state.mode === 'light' ? 'dark' : 'light';
            state.mode = newMode;
            localStorage.setItem('themeMode', newMode);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;