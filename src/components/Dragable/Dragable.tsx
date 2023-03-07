import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import { elementTypes, IItem, TGetComponent } from '../../App.types';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { saveDndParams } from '../../store/rootSlice';
import Display from '../Calculator/Display/Display';
import Equals from '../Calculator/Equals/Equals';
import Keyboard from '../Calculator/Keyboard/Keyboard';
import Operators from '../Calculator/Operators/Operators';
import { IDragableProps } from './Dragable.types';

const Dragable: React.FC<IDragableProps> = ({ disabled, type }) => {
    const ref = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();

    const [, drag] = useDrag(() => ({
        type: type,
        item: { type }
    }));

    const getComponent: TGetComponent = (name) => {
        switch (name) {
            case elementTypes.DISPLAY:
                return <Display key={name} {...{ disabled }} />;

            case elementTypes.EQUALS:
                return <Equals key={name} {...{ disabled }} />;

            case elementTypes.KEYBOARD:
                return <Keyboard key={name} {...{ disabled }} />;

            case elementTypes.OPERATORS:
                return <Operators key={name} {...{ disabled }} />;

            default:
                break;
        }
    };

    const [, drop] = useDrop<IItem>(() => ({
        accept: [...Object.values(elementTypes)],
        hover: (item, monitor) => {
            // const hoverRect = ref.current?.getBoundingClientRect();
            // const hoverMiddleY = hoverRect ? (hoverRect.bottom - hoverRect.top) / 2 : 0;
            // const clientOffset = monitor.getClientOffset();
            // const hoverClientY = clientOffset && hoverRect ? clientOffset.y - hoverRect.top : 0;
            // if (hoverMiddleY > hoverClientY) {
            //     dispatch(setDropPosition('above'));
            // } else if (hoverMiddleY < hoverClientY) {
            //     dispatch(setDropPosition('below'));
            // }
        },
        drop: (item, monitor) => {
            const hoverRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = hoverRect ? (hoverRect.bottom - hoverRect.top) / 2 : 0;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset && hoverRect ? clientOffset.y - hoverRect.top : 0;

            if (hoverMiddleY > hoverClientY) {
                dispatch(saveDndParams({ object: item.type, target: type, position: 'above' }));
            } else if (hoverMiddleY < hoverClientY) {
                dispatch(saveDndParams({ object: item.type, target: type, position: 'below' }));
            }
        }
    }));

    drag(drop(ref));

    return (
        <div draggable={!disabled} ref={ref}>
            {getComponent(type)}
        </div>
    );
};

export default Dragable;
