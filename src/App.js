import React, { useEffect, useRef } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import './App.css';

const App = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const options = {
            float: true,
            animate: true,
            cellHeight: 100,
            verticalMargin: 10,
            disableResize: false,
            disableDrag: false,
        };

        if (gridRef.current) {
            const grid = GridStack.init(options, gridRef.current);

            return () => {
                grid.destroy();
            };
        }
    }, []);

    return (
        <div className="grid-stack" ref={gridRef}>
            <div className="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="2">
                <div className="grid-stack-item-content">Chart 1</div>
            </div>
            <div className="grid-stack-item" data-gs-x="4" data-gs-y="0" data-gs-width="4" data-gs-height="2">
                <div className="grid-stack-item-content">Chart 2</div>
            </div>
            <div className="grid-stack-item" data-gs-x="0" data-gs-y="2" data-gs-width="2" data-gs-height="2">
                <div className="grid-stack-item-content">Stats 1</div>
            </div>
            <div className="grid-stack-item" data-gs-x="2" data-gs-y="2" data-gs-width="2" data-gs-height="2">
                <div className="grid-stack-item-content">Stats 2</div>
            </div>
            <div className="grid-stack-item" data-gs-x="4" data-gs-y="2" data-gs-width="4" data-gs-height="2">
                <div className="grid-stack-item-content">Table</div>
            </div>
        </div>
    );
};

export default App;
