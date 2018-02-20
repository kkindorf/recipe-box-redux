import {ADD_RECIPE} from '../actions/index';

export default function(state = [{name: 'pizza', ingredients: ['cheese', 'dough', 'sauce']}], action) {
    switch(action.type) {
        case ADD_RECIPE:
        return [action.payload, ...state]
    }
    return state;
}