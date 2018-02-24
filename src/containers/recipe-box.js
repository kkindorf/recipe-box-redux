import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateRecipe} from '../actions/index';
import {deleteRecipe} from '../actions/index';

 class RecipeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {newName: '', newIngredients:''};
        this.onNameChange = this.onNameChange.bind(this);
        this.onIngredientsChange = this.onIngredientsChange.bind(this);
        this.handleUpdatedRecipe = this.handleUpdatedRecipe.bind(this);
        this.handleDeletedRecipe = this.handleDeletedRecipe.bind(this);
    }
    onIngredientsChange(event) {
        this.setState({newIngredients: event.target.value})
    }
    onNameChange(event) {
        this.setState({newName: event.target.value});
    }
    handleUpdatedRecipe(event) {
        //set up basic validation here to make sure recipe form is been edited
        event.preventDefault();
        if(this.state.newName === "" && this.state.newIngredients === "") {
            return;
        }
        else if(this.state.newName == "" && this.state.newIngredients !== "" ){
            this.props.updateRecipe({
                oldName: this.props.name,
                newName: this.props.name,
                newIngredients: this.state.newIngredients.split(',')
            })
        }
        else if(this.state.newName !== "" && this.state.newIngredients == "") {
            this.props.updateRecipe({
                oldName: this.props.name,
                newName: this.state.newName,
                newIngredients: this.props.ingredients
            })
        }
        else {
            this.props.updateRecipe({
                oldName: this.props.name,
                newName: this.state.newName, 
                newIngredients: this.state.newIngredients.split(',') 
            })
        }
        
        //clear form fields after submission
        this.setState({newName: "", newIngredients: ""})

    }
    handleDeletedRecipe(event) {
        event.preventDefault();
        this.props.deleteRecipe({
            name: this.props.name,
            ingredients: this.props.ingredients
        })
        


    }
     render() {
        return (
            <div>
                <div className="card border-success mb-3">
                    <div className="card-block">
                        <form>
                            <div className="form-group">
                                <label>Recipe Name: <strong>{this.props.name}</strong></label>
                                <input type="text" className="form-control" id="nameInput" value={this.state.newName} placeholder="Update recipe name"  onChange={this.onNameChange}/>
                                <label>Recipe Ingredients: <strong>{this.props.ingredients}</strong></label>
                                <input type="text" className="form-control" id="ingredientsInput" value={this.state.newIngredients} placeholder="Update ingredients" onChange={this.onIngredientsChange}/>
                            </div>
                            <button type="submit" className="btn btn-success" onClick={this.handleUpdatedRecipe}>Update</button>
                            <button onClick={this.handleDeletedRecipe} type="submit" className="btn btn-danger pull-right">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        )  
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateRecipe, deleteRecipe}, dispatch)
}
export default connect(null, mapDispatchToProps)(RecipeBox);