import { elementTypes } from '../App.types';
import store from './store';

export interface IRootSlice {
    sidebar: elementTypes[];
    canvas: elementTypes[];
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
