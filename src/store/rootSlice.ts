import { createSlice } from '@reduxjs/toolkit';
import { elementTypes } from '../App.types';
import type { IRootSlice } from './rootSlice.types';

const initialState: IRootSlice = {
    sidebar: [elementTypes.DISPLAY, elementTypes.KEYBOARD],
    canvas: []
};

const rootSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {}
});

const rootReducer = rootSlice.reducer;
export default rootReducer;
