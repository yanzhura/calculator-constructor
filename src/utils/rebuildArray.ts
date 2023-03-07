import { TPosition, elementTypes } from '../App.types';

type IRebuildArrayFn = (
    array: elementTypes[],
    object: elementTypes,
    target?: elementTypes,
    position?: TPosition
) => elementTypes[] | undefined;

const insertAtPosition: IRebuildArrayFn = (array, object, target, position) => {
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

export const rebuildArray: IRebuildArrayFn = (array, object, target, position) => {
    if (!array.includes(object) && !target) {
        const newArray = [...array];
        newArray.push(object);
        return newArray;
    }
    if (!array.includes(object) && target) {
        return insertAtPosition(array, object, target, position);
    }
    if (array.includes(object) && target) {
        const withDeletedObject = array.filter((el) => el !== object);
        return insertAtPosition(withDeletedObject, object, target, position);
    }
};
