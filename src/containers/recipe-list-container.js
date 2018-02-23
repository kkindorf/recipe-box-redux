import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipeBox from '../containers/recipe-box';
class RecipeListContainer extends Component {
        render() {
            let recipeBoxes = this.props.recipes.map((recipe, index)=> {
                 return (
                     <RecipeBox key={index} 
                                name={recipe.name}
                                ingredients={recipe.ingredients}/>
                 ) 
             })
             return (
                <div className="col-sm-6">
                    {recipeBoxes}
                </div>
            )
        }
}

function mapStateToProps({recipes}) {
    return {recipes}
}

export default connect(mapStateToProps)(RecipeListContainer);