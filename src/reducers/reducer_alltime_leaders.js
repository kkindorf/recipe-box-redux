import {FETCH_ALLTIME_LEADERS} from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_ALLTIME_LEADERS:
            return action.payload.data
    }
    return state;
}