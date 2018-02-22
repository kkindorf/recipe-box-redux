import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RecipeBox from '../components/recipe-box';
import {updateRecipe} from '../actions/index';

class RecipeListContainer extends Component {
        constructor(props) {
            super(props);
            this.state = {newName: '', newIngredients:''};
            this.onNameChange = this.onNameChange.bind(this);
            this.onIngredientsChange = this.onIngredientsChange.bind(this);
        }
        onIngredientsChange(event) {
            
            this.setState({newIngredients: event.target.value})
        }
        onNameChange(event) {
            
            this.setState({newName: event.target.value});
        }
        render() {
            let recipeBoxes = this.props.recipes.map((recipe, index)=> {
                 return (
                     <RecipeBox key={index} 
                                name={recipe.name}
                                ingredients={recipe.ingredients}
                                onNameChange={this.onNameChange}
                                onIngredientsChange ={this.onIngredientsChange}
                                updateRecipe={(event) => {
                                    //set up basic validation here to make sure recipe form is been edited
                                    event.preventDefault();
                                    if(this.state.newName === recipe.name && this.state.newIngredients === recipe.ingredients) {
                                        return;
                                    }
                                    //pass in object with new name, ingreddients and the index along with the previous array of recipes
                                    this.props.updateRecipe({
                                        newName: this.state.newName, newIngredients: this.state.newIngredients.split(','), index: index
                                    })
                                }}/>
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateRecipe}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer);