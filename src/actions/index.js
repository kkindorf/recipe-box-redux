export const ADD_RECIPE = "ADD_RECIPE";

export function addRecipe(name, ingredients) {
    const recipeList = localStorage.getItem('recipes');
    let arrayOfIngredients = ingredients.split(",");
    localStorage.setItem('recipes', recipeList.push({name: name, ingredients: arrayOfIngredients}));
    return {
        type: ADD_RECIPE,
        payload: recipeList
    }
}