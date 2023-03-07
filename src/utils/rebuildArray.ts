import { TInsertAtPositionFn, TCheckDisplayRestrictionsFn, TRebuildArrayFn } from './rebuildArrays.types';
import { elementTypes } from '../App.types';

const insertAtPosition: TInsertAtPositionFn = (array, object, target, position) => {
    const newArray = array.flatMap((el) => {
        if (el === target) {
            if (position === 'above') {
                return [object, el];
            } else {
                return [el, object];
            }
        } else {
            return el;
        }
    });
    return newArray;
};

export const checkDisplayRestrictions: TCheckDisplayRestrictionsFn = (array) => {
    if (array.includes(elementTypes.DISPLAY) && array[0] !== elementTypes.DISPLAY) {
        return false;
    }
    return true;
};

export const rebuildArray: TRebuildArrayFn = (array, object, target, position) => {
    if (!array.includes(object) && !target) {
        const newArray = [...array];
        newArray.push(object);
        if (checkDisplayRestrictions(newArray)) {
            return newArray;
        }
        return undefined;
    }

    if (!array.includes(object) && target) {
        const newArray = insertAtPosition(array, object, target, position);
        if (checkDisplayRestrictions(newArray)) {
            return newArray;
        }
        return undefined;
    }

    if (array.includes(object) && target) {
        const withDeletedObject = array.filter((el) => el !== object);
        const newArray = insertAtPosition(withDeletedObject, object, target, position);
        if (checkDisplayRestrictions(newArray)) {
            return newArray;
        }
        return undefined;
    }
};
