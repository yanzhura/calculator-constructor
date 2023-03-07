import React from 'react';
import { ICalcBaseElement } from '../../../App.types';
import * as S from './Equals.styles';

const Equals: React.FC<ICalcBaseElement> = ({ disabled }) => {
    return <S.Wrapper {...{ disabled }}>Equals</S.Wrapper>;
};

export default Equals;
