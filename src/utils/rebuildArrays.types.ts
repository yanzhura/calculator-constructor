import { elementTypes, TPosition } from './../App.types';
export type TRebuildArrayFn = (
    array: elementTypes[],
    object: elementTypes,
    target?: elementTypes,
    position?: TPosition
) => elementTypes[] | undefined;

export type TInsertAtPositionFn = (
    array: elementTypes[],
    object: elementTypes,
    target?: elementTypes,
    position?: TPosition
) => elementTypes[];

export type TCheckDisplayRestrictionsFn = (array: elementTypes[]) => boolean;
