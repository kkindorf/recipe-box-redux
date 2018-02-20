import React, {Component} from 'react';
import {connect} from 'react-redux';

class RecipeList extends Component {
    componentDidMount() {
        //set initial recipes data here so we always have something available
        localStorage.setItem('recipes', JSON.stringify(this.props.recipes));
    }
    render(){
        console.log(this.props.recipes);
        return (
            <h1>Hello from recipe list</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
        staticRecipes: state.staticRecipes
    }
}
export default connect(mapStateToProps)(RecipeList);