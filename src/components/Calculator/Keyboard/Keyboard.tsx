import React from 'react';
import { useDrag } from 'react-dnd/dist/hooks';
import { elementTypes } from '../../../App.types';
import * as S from './Keyboard.styles';

const Keyboard: React.FC = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: elementTypes.KEYBOARD,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    console.log('isDragging :>> ', isDragging);

    return <S.Wrapper ref={drag}>keyboard</S.Wrapper>;
};

export default Keyboard;
