import { SET_FILTER } from '../actionTypes';

//import { VISBILITY_FILTERS } from '../../constants';
import { VISIBILITY_FILTERS } from "../../constants";

const initialState = VISBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
    switch (action.type){
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;