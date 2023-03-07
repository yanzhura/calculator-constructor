import React from 'react';
import useAppSelector from './hooks/use-app-selector';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas/Canvas';
import Dragable from './components/Dragable/Dragable';
import { elementTypes, TRenderElements } from './App.types';
import * as S from './App.styles';
import useAppDispatch from './hooks/use-app-dispatch';
import { removeFromCanvas } from './store/rootSlice';

const App: React.FC = () => {
    const { canvas } = useAppSelector((state) => state);
    const { sidebar } = useAppSelector((state) => state);

    const dispatch = useAppDispatch();

    const removeHandler = (type: elementTypes) => dispatch(removeFromCanvas(type));

    const renderSidebar: TRenderElements = (elements) => {
        return elements.map((el) => {
            const isDisabled = canvas.includes(el);
            return <Dragable key={el} type={el} disabled={isDisabled} />;
        });
    };

    const renderCanvas: TRenderElements = (elements) => {
        return elements.map((el) => {
            return <Dragable key={el} type={el} {...{ removeHandler }} />;
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
