import {FETCH_THIRTYDAY_LEADERS} from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_THIRTYDAY_LEADERS:
            return action.payload.data
    }
    return state;
}