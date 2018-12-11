import { GENERATION_ACTION_TYPE } from '../actions/types.js';


const DEFAULT_GENERATION = {generationId: '', expiration: ''};

// reducers describe a section of the store 
// actions are internal objs with unique types that flow through redux - update state accordinly
export const generationReducer = (state, action) => {
    // console.log('generationReducer:', state);
    // console.log('generationACTION:', action);

    if (action.type === GENERATION_ACTION_TYPE) {
        return { generation: action.generation };
    }
    // Gets set as the state for the generation reducer. 
    return { generation: DEFAULT_GENERATION };
};