export const ADD_RECIPE = "ADD_RECIPE";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const UPDATE_RECIPE = "UPDATE_RECIPE";

export function addRecipe(name, ingredients) {
    //create new recipe object
    let newRecipe = {
        name: name,
        ingredients: ingredients.split(",")
    };
    return {
        type: ADD_RECIPE,
        payload: newRecipe
    }
}
export function updateRecipe(updatedRecipe) {
    //send the updatedRecipe Object to
    console.log(updatedRecipe)
    return {
        type: UPDATE_RECIPE,
        payload: updatedRecipe
    }
}
