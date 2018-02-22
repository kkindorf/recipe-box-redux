import React, { Component } from 'react';
import Form from '../containers/form';
import RecipeListContainer from '../containers/recipe-list-container';
export default class App extends Component {
    render() {
      return (
        <div>
          <Form/>
          <RecipeListContainer/>
        </div>
      );
    }
  }