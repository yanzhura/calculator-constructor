import React from 'react';
import { ICalcBaseElement } from '../../../App.types';
import * as S from './Operators.styles';

const Operators: React.FC<ICalcBaseElement> = ({ disabled }) => {
    return <S.Wrapper {...{ disabled }}>Operators</S.Wrapper>;
};

export default Operators;
