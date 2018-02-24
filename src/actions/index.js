export const ADD_RECIPE = "ADD_RECIPE";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";

export function addRecipe(name, ingredients) {
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
    return {
        type: UPDATE_RECIPE,
        payload: updatedRecipe
    }
}
export function deleteRecipe(deletedRecipe) {
    
    return {
        type: DELETE_RECIPE,
        payload: deletedRecipe
    }
}
