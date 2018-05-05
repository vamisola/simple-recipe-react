import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
        <Footer />
      </div>
    );
  }
}

export default RecipeApp;
