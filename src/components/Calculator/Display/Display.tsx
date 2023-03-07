import React from 'react';
import { ICalcBaseElement } from '../../../App.types';
import * as S from './Display.styles';

const Display: React.FC<ICalcBaseElement> = ({ disabled }) => {
    return <S.Wrapper {...{ disabled }}>display</S.Wrapper>;
};

export default Display;
