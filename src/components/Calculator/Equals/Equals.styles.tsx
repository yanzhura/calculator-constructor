import styled from '@emotion/styled';
import { ICalcBaseElement } from '../../../App.types';
import colors from '../../../styles/colors';

export const Wrapper = styled.div<ICalcBaseElement>`
    height: 100%;
    border-radius: 3px;
    background-color: ${colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => props.disabled && '50%'};
`;
