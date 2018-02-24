import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addRecipe} from '../actions/index';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {recipeName: "", ingredients: ""}
        this.onRecipeNameChange = this.onRecipeNameChange.bind(this);
        this.onIngredientsChange = this.onIngredientsChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.addRecipe(this.state.recipeName, this.state.ingredients)
        this.setState({recipeName: "", ingredients: ""})
    }
    onRecipeNameChange(event) {
        this.setState({recipeName: event.target.value})
        
    }
    onIngredientsChange(event) {
        this.setState({ingredients: event.target.value})
    }
    render() {
        return (
            <div className="col-sm-6 add-recipe-container">
                <h3 className="text-center">Add a new recipe to the list</h3>
                <form id="newRecipe" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={this.state.recipeName}id="description" placeholder="Add a description" onChange={this.onRecipeNameChange}/>
                    <label>Ingredients</label>
                    <input type="text" className="form-control" value={this.state.ingredients} id="ingredients" placeholder='Add ingredients seperated by commas' onChange={this.onIngredientsChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addRecipe}, dispatch)
}

export default connect(null, mapDispatchToProps)(Form);