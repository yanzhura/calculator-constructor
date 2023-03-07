import { createSlice } from '@reduxjs/toolkit';
import { rebuildArray } from '../utils/rebuildArray';
import { elementTypes } from '../App.types';
import type { IRootSlice } from './rootSlice.types';

const initialState: IRootSlice = {
    sidebar: [...Object.values(elementTypes)],
    canvas: []
};

const rootSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        sortCanvas: (state, action) => {
            const { object, target, position } = action.payload;
            const newCanvas = rebuildArray(state.canvas, object, target, position);
            if (newCanvas) {
                state.canvas = newCanvas;
            }
        }
    }
});

const rootReducer = rootSlice.reducer;
export const { sortCanvas } = rootSlice.actions;

export default rootReducer;
