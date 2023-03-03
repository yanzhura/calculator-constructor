import React from 'react';
import * as S from './Sidebar.styles';

interface ISidebarProps {
    children?: React.ReactNode;
}

const Sidebar: React.FC<ISidebarProps> = ({ children }) => {
    return <S.Wrapper>{children}</S.Wrapper>;
};

export default Sidebar;
