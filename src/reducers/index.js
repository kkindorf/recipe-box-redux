import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipes';

const rootReducer = combineReducers({

    recipes: RecipesReducer
});

export default rootReducer;