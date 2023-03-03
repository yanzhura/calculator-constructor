import React from 'react';

export enum elementTypes {
    KEYBOARD = 'keyboard',
    DISPLAY = 'display'
}

export type TRenderElements = (elements: elementTypes[]) => React.ReactNode;
export type TGetComponent = (name: string) => React.ReactNode;
