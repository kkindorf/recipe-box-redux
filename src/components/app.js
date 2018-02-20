import React, { Component } from 'react';
import Form from '../containers/form';
import RecipeList from '../containers/recipe-list';
export default class App extends Component {
    render() {
      return (
        <div>
          <Form/>
          <RecipeList/>
        </div>
      );
    }
  }