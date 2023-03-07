import store from './store';
import { TPosition } from './../App.types';
import { elementTypes } from '../App.types';

export interface IRootSlice {
    sidebar: elementTypes[];
    canvas: elementTypes[];
    dndParams: {
        object: elementTypes;
        target: elementTypes;
        position: TPosition;
    } | null;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
