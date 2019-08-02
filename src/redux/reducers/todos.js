import {ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const InitialState = {
    allids:[],
    byids:{}
};

export default function(state = InitialState, action){
    switch (action.type){
        case ADD_TODO:{
            const {id, content } = action.payload;
            return {
                ...state,
                allids: [...state.allids, id],
                byids: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const {id} = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        default:
            return state;
    }
}