import React from 'react';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import { elementTypes, IItem } from '../../App.types';
import useAppDispatch from '../../hooks/use-app-dispatch';
import type { ICanvasProps } from './Canvas.types';
import * as S from './Canvas.styles';
import { sortCanvas } from '../../store/rootSlice';

const Canvas: React.FC<ICanvasProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    const [, drop] = useDrop<IItem>(() => ({
        accept: [...Object.values(elementTypes)],
        drop: (item) => {
            dispatch(sortCanvas({ object: item.type }));
        }
    }));

    return <S.Wrapper ref={drop}>{children}</S.Wrapper>;
};

export default Canvas;
