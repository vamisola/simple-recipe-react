import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  render(){
    return(
        <div>
          <header>
            <h2><a>Recipe App</a></h2>
          <nav>
            <li><a href=""><i className="fa fa-home"></i>New Recipe</a></li>
            <li><a href=""><i className="fa fa-question"></i>Home</a></li>
            <li><a href=""><i className="fa fa-phone"></i>About</a></li>
            <li><a href=""><i className="fa fa-recipe"></i>Contact Us</a></li>
          </nav>
          </header>
        </div>
      );
  }
}

export default Navbar;
