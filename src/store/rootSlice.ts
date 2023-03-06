import { createSlice } from '@reduxjs/toolkit';
import { elementTypes } from '../App.types';
import type { IRootSlice } from './rootSlice.types';

const initialState: IRootSlice = {
    sidebar: [elementTypes.DISPLAY, elementTypes.OPERATORS, elementTypes.KEYBOARD, elementTypes.EQUALS],
    canvas: []
};

const rootSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        dropToCanvas: (state, action) => {
            const isCanvasFull = !(state.canvas.length < 4);
            const isAlreadyDropped = state.canvas.includes(action.payload);
            if (!isCanvasFull && !isAlreadyDropped) {
                state.canvas.push(action.payload);
            }
        }
    }
});

const rootReducer = rootSlice.reducer;
export const { dropToCanvas } = rootSlice.actions;

export default rootReducer;
