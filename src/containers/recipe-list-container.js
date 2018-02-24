import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipeBox from '../containers/recipe-box';
class RecipeListContainer extends Component {
        render() {
           
                let recipeBoxes = this.props.recipes.map((recipe, index)=> {
                    let recipeIngredients = recipe.ingredients.toString();
                    return (
                        <RecipeBox key={index} 
                                   name={recipe.name}
                                   ingredients={recipeIngredients}/>
                    ) 
                })
                return (
                   <div className="col-sm-6 recipe-list-container">
                       {recipeBoxes}
                   </div>
               )
        }
}

function mapStateToProps({recipes}) {
    return {recipes}
}

export default connect(mapStateToProps)(RecipeListContainer);