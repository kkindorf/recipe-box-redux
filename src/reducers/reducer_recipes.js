import {ADD_RECIPE} from '../actions/index';
import {UPDATE_RECIPE} from '../actions/index';
import {DELETE_RECIPE} from '../actions/index';
 
let initialState;
if(!localStorage.getItem('recipes')) {
    initialState = [{name: 'Pizza', ingredients: ['tomato sauce' , 'cheese', 'pizza dough']}]
}
else {
    initialState = JSON.parse(localStorage.getItem('recipes'))
}
export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_RECIPE:
        //use spread operator here to return all object in original state array and add the new recipe object. Then return updated array copy
        localStorage.setItem('recipes', JSON.stringify([...state, action.payload]))
        return [...state, action.payload];

        case UPDATE_RECIPE:
        //create new copy of recipes array by using map to return each one. Once the original recipe object is found, update it's main content with the new recipe data and return the updatedRecipes arra
        let updatedRecipes = state.map((recipe, index) => {
            if(recipe.name !== action.payload.oldName) {
                return recipe;
            }
            recipe.name = action.payload.newName;
            recipe.ingredients = action.payload.newIngredients;
            return recipe;
        })
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
        return updatedRecipes;

        case DELETE_RECIPE:
         let newRecipeList = state.filter((recipe) => {
            if(recipe.name !== action.payload.name) {
                return recipe;
            }
        })
        localStorage.setItem('recipes', JSON.stringify(newRecipeList));
        return newRecipeList;
        
    }
    return state;
}