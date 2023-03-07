import { createSlice } from '@reduxjs/toolkit';
import { rebuildArray } from '../utils/rebuildArray';
import { elementTypes } from '../App.types';
import type { IRootSlice } from './rootSlice.types';

const initialState: IRootSlice = {
    sidebar: [...Object.values(elementTypes)],
    canvas: [],
    dndParams: null
};

const rootSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        sortCanvas: (state, action) => {
            if (state.dndParams?.target) {
                const { object, target, position } = state.dndParams;
                const newCanvas = rebuildArray(state.canvas, object, target, position);
                if (newCanvas) {
                    state.canvas = newCanvas;
                }
                state.dndParams = null;
            } else {
                const { object } = action.payload;
                const newCanvas = rebuildArray(state.canvas, object);
                if (newCanvas) {
                    state.canvas = newCanvas;
                }
            }
        },
        saveDndParams: (state, action) => {
            state.dndParams = action.payload;
        },
        removeFromCanvas: (state, action) => {
            state.canvas = state.canvas.filter((el) => el !== action.payload);
        }
    }
});

const rootReducer = rootSlice.reducer;
export const { sortCanvas, saveDndParams, removeFromCanvas } = rootSlice.actions;

export default rootReducer;
