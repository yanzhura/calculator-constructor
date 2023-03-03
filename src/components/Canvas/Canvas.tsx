import React from 'react';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import { elementTypes } from '../../App.types';
import * as S from './Canvas.styles';
import type { ICanvasProps, IItem } from './Canvas.types';

const Canvas: React.FC<ICanvasProps> = ({ children }) => {
    const [, drop] = useDrop(() => ({
        accept: [elementTypes.DISPLAY, elementTypes.KEYBOARD],
        drop: (item: IItem) => console.log('item :>> ', item.kind)
    }));

    return <S.Wrapper ref={drop}>{children}</S.Wrapper>;
};

export default Canvas;
