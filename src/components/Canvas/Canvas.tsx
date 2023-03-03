import React from 'react';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import { elementTypes } from '../../App.types';
import * as S from './Canvas.styles';

interface ICanvasProps {
    children?: React.ReactNode;
}

const Canvas: React.FC<ICanvasProps> = ({ children }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: [elementTypes.DISPLAY, elementTypes.KEYBOARD],
        drop: () => console.log('dropped !'),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    console.log('isOver :>> ', isOver);

    return <S.Wrapper ref={drop}>{children}</S.Wrapper>;
};

export default Canvas;
