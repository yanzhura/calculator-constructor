import React from 'react';
import useAppSelector from './hooks/use-app-selector';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas/Canvas';
import Keyboard from './components/Calculator/Keyboard/Keyboard';
import Display from './components/Calculator/Display/Display';
import { elementTypes, TGetComponent, TRenderElements } from './App.types';
import * as S from './App.styles';

const App: React.FC = () => {
    const { canvas } = useAppSelector((state) => state);
    const { sidebar } = useAppSelector((state) => state);

    const getComponent: TGetComponent = (name) => {
        switch (name) {
            case elementTypes.DISPLAY:
                return <Display key={name} />;

            case elementTypes.KEYBOARD:
                return <Keyboard key={name} />;

            default:
                break;
        }
    };

    const renderElements: TRenderElements = (elements) => {
        return elements.map((component) => getComponent(component));
    };

    return (
        <S.AppWrapper>
            <Sidebar>{renderElements(sidebar)}</Sidebar>
            <Canvas>{renderElements(canvas)}</Canvas>
        </S.AppWrapper>
    );
};

export default App;
