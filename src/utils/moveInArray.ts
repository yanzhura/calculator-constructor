import { TPosition, elementTypes } from './../App.types';

type IMoveInArrayFn = (
    array: elementTypes[],
    object: elementTypes,
    target?: elementTypes,
    position?: TPosition
) => elementTypes[];

const insertAtPosition: IMoveInArrayFn = (array, object, target, position) => {
    if (!target && !position) {
        const newArray = [...array];
        newArray.push(object);
        return newArray;
    }

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
    return newArray as elementTypes[];
};

export const moveToPosition: IMoveInArrayFn = (array, object, target, position) => {
    if (array.includes(object)) {
        if (target && position) {
            const withDeletedObject = array.filter((el) => el !== object);
            return insertAtPosition(withDeletedObject, object, target, position);
        }
        return array;
    } else {
        return insertAtPosition(array, object, target, position);
    }
};
