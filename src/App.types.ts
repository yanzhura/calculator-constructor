import React from 'react';

export enum elementTypes {
    KEYBOARD = 'keyboard',
    DISPLAY = 'display',
    EQUALS = 'equals',
    OPERATORS = 'operators'
}

export type TRenderElements = (elements: elementTypes[]) => React.ReactNode;
export type TGetComponent = (name: string) => React.ReactNode;

export interface ICalcBaseElement {
    disabled?: boolean;
}
