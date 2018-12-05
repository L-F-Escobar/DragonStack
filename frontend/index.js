import React from 'react';
// Not default export so we import with {} braces
import {render} from 'react-dom';

// JSX code  - javascript xml like syntax. look like inline html in the javascript
// A special kind of syntax in js that is used to represents elemets of the document objects module of the browser
render(
    <div>Dragon Stack from React</div>,
    // document obj is powerful - its a representations of the entire DOM, 
    // with inner helper methods like the one used; to help locate specific 
    // places on the browser
    document.getElementById('root')
);