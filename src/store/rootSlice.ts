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
    reducers: {
        dropToCanvas: (state, action) => {
            state.canvas.push(action.payload);
        }
    }
});

const rootReducer = rootSlice.reducer;
export const { dropToCanvas } = rootSlice.actions;

export default rootReducer;
