import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateRecipe} from '../actions/index';

 class RecipeBox extends Component {
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
        return (
            <div>
                <div className="card card-outline-primary mb-3 text-center">
                    <div className="card-block">
                        <form>
                            <div className="form-group">
                                <label>{this.props.name}</label>
                                <input type="text" className="form-control" id="nameInput" defaultValue={this.props.name}  onChange={this.onNameChange}/>
                                <label>Ingredients</label>
                                <input type="text" className="form-control" id="ingredientsInput" defaultValue={this.props.ingredients} placeholder="use commas to seperate ingredients" onChange={this.onIngredientsChange}/>
                            </div>
                            <button type="submit" className="btn btn-success" onClick={(event) => {
                                    //set up basic validation here to make sure recipe form is been edited
                                    event.preventDefault();
                                    if(this.state.newName === this.props.name && this.state.newIngredients === this.props.ingredients) {
                                        return;
                                    }
                                    //pass in object with new name, ingreddients and the index along with the previous array of recipes
                                    this.props.updateRecipe({
                                        oldName: this.props.name,
                                        newName: this.state.newName, newIngredients: this.state.newIngredients.split(',') 
                                    })
                                }}>Update</button>
                            <button onClick={this.props.deleteRecipe} type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        )  
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateRecipe}, dispatch)
}
export default connect(null, mapDispatchToProps)(RecipeBox);