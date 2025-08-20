import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
    navbarHeight: number;
    heroHeight: number;
}

const initialState: LayoutState = {
    navbarHeight: 0,
    heroHeight: 0,
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setNavbarHeight(state, action: PayloadAction<number>) {
            state.navbarHeight = action.payload;
        }, // mede a altura da navbar automaticamente
        setHeroHeight(state, action: PayloadAction<number>) {
            state.heroHeight = action.payload;
        }, // mede a altura do hero section automaticamente
    },
});

export const { setNavbarHeight, setHeroHeight } = layoutSlice.actions;

export default layoutSlice.reducer;