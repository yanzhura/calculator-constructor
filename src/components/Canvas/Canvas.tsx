import React from 'react';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import { elementTypes } from '../../App.types';
import useAppDispatch from '../../hooks/use-app-dispatch';
import type { ICanvasProps, IItem } from './Canvas.types';
import { dropToCanvas } from '../../store/rootSlice';
import * as S from './Canvas.styles';

const Canvas: React.FC<ICanvasProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    const [, drop] = useDrop(() => ({
        accept: [...Object.values(elementTypes)],
        drop: (item: IItem) => dispatch(dropToCanvas(item.type))
    }));

    return <S.Wrapper ref={drop}>{children}</S.Wrapper>;
};

export default Canvas;
