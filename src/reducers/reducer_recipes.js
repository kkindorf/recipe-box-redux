import {ADD_RECIPE} from '../actions/index';
import {UPDATE_RECIPE} from '../actions/index';
export default function(state = [{name: 'pizza', ingredients:['cheese']}], action) {
    switch(action.type) {
        case ADD_RECIPE:
        //use spread operator here to return all object in original state array and add the new recipe object. Then return updated array copy
        return [...state, action.payload];

        case UPDATE_RECIPE:
        //create new copy of recipes array by using map to return each one. Once the original recipe object is found, update it's main content with the new recipe data and return the updatedRecipes arra
        let updatedRecipes = state.map((recipe, index) => {
            if(index !== action.payload.index) {
                return recipe;
            }
            recipe.name = action.payload.newName;
            recipe.ingredients = action.payload.newIngredients;
            return recipe;
        })
        return updatedRecipes;
    }

    return state;
}