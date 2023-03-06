import React from 'react';
import useAppSelector from './hooks/use-app-selector';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas/Canvas';
import Dragable from './components/Dragable/Dragable';
import { TRenderElements } from './App.types';
import * as S from './App.styles';

const App: React.FC = () => {
    const { canvas } = useAppSelector((state) => state);
    const { sidebar } = useAppSelector((state) => state);

    const renderSidebar: TRenderElements = (elements) => {
        return elements.map((el) => {
            const isDisabled = canvas.includes(el);
            return <Dragable key={el} type={el} disabled={isDisabled} />;
        });
    };

    const renderCanvas: TRenderElements = (elements) => {
        return elements.map((el) => {
            return <Dragable key={el} type={el} />;
        });
    };

    return (
        <S.AppWrapper>
            <Sidebar>{renderSidebar(sidebar)}</Sidebar>
            <Canvas>{renderCanvas(canvas)}</Canvas>
        </S.AppWrapper>
    );
};

export default App;
