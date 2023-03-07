import React from 'react';
import { ICalcBaseElement } from '../../../App.types';
import * as S from './Keyboard.styles';

const Keyboard: React.FC<ICalcBaseElement> = ({ disabled }) => {
    return <S.Wrapper {...{ disabled }}>Keyboard</S.Wrapper>;
};

export default Keyboard;
