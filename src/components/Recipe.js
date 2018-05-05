import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    photographer: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }
  render() {
    const {title, photographer,img, instructions} = this.props;
    const ingredients =
      this.props.ingredients.map((ing, index) => (
        <li key={index}>{ing}</li>
      ));
    return (
      <div className="recipe-card">
        <div className="recipe-info">
        <div className="recipe-card-img">
          <img src={img} alt={title}/>
          <h5>{photographer}</h5>
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions</h4>
          <p>{instructions}</p>
        </div>
        </div>
      </div>

    );
  }
}

export default Recipe;
