import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Not default export so we import with {} braces
import {render} from 'react-dom';
import Generation from './components/Generation.js';
import Dragon from './components/Dragon.js';
import { generationReducer } from './reducers';
import { generationActionCreator } from './actions/generation.js';
import "./index.css";


// store - an obj with a lot of inner helper methods around the concept
//          of universal state of the app 
const store = createStore(
    generationReducer//,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => console.log('store state update', store.getState()));

// ~~~ CODE USED TO TEST & EXPERIMENT ~~~
// console.log('store:', store);
// store.dispatch({ type: 'food' });
// store.dispatch({ 
//     type: GENERATION_ACTION_TYPE,
//     // key is generation payload
//     generation: { generationId: 'goo', expiration: 'bar'}
// });
// console.log('store.getState():', store.getState());
// const zooAction = generationActionCreator({
//     generationId: 'zoo',
//     expiration: 'bar'
// });
// store.dispatch(zooAction);

fetch("http://localhost:5000/generation")
    .then(response => response.json())
    .then(json => {
        store.dispatch(generationActionCreator(json.generation))
    });
    // .catch(error => console.log('error', error));

// JSX code  - javascript xml like syntax. look like inline html in the javascript
// A special kind of syntax in js that is used to represents elemets of the document objects module of the browser
render(
    // Every react component now have access to store through props now
    <Provider store={store}>
        <div>
            <h2>Dragon Stack from React</h2>
            <Generation />
            <Dragon />
        </div>
    </Provider>,
    // document obj is powerful - its a representations of the entire DOM, 
    // with inner helper methods like the one used; to help locate specific 
    // places on the browser
    document.getElementById('root')
);