import { combineReducers } from 'redux';
import AllTimeLeadersReducer from './reducer_alltime_leaders';
import ThirtyDayLeadersReducer from './reducer_thirtyday_leaders';



const rootReducer = combineReducers({
  allTimeLeaders: AllTimeLeadersReducer,
  thirtyDayLeaders: ThirtyDayLeadersReducer
});

export default rootReducer;