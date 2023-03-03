import React from 'react';
import { useDrag } from 'react-dnd/dist/hooks';
import { elementTypes } from '../../../App.types';
import * as S from './Keyboard.styles';

const Keyboard: React.FC = () => {
    const [, drag] = useDrag(() => ({
        type: elementTypes.KEYBOARD,
        item: { kind: elementTypes.KEYBOARD }
    }));

    return <S.Wrapper ref={drag}>keyboard</S.Wrapper>;
};

export default Keyboard;
