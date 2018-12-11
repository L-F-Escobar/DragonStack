import React from 'react';
import { createStore } from 'redux';
// Not default export so we import with {} braces
import {render} from 'react-dom';
import Generation from './components/Generation.js'
import Dragon from './components/Dragon.js'
import "./index.css";

const DEFAULT_GENERATION = {generationId: '', expiration: ''};

const generationReducer = () => {
    return { generation: DEFAULT_GENERATION };
}

const store = createStore(generationReducer);

console.log('store:', store);
console.log('store.getState():', store.getState());

// JSX code  - javascript xml like syntax. look like inline html in the javascript
// A special kind of syntax in js that is used to represents elemets of the document objects module of the browser
render(
    <div>
        <h2>Dragon Stack from React</h2>
        <Generation />
        <Dragon />
    </div>,
    // document obj is powerful - its a representations of the entire DOM, 
    // with inner helper methods like the one used; to help locate specific 
    // places on the browser
    document.getElementById('root')
);