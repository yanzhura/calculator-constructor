import { elementTypes } from './../../App.types';
export interface IDragableProps {
    disabled?: boolean;
    type: elementTypes;
    removeHandler?: (type: elementTypes) => void;
}
