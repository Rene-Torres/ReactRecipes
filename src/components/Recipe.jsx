import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = () => {
    const title = this.props.location.state.recipe;
    const URL = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`;

    fetch(URL)
      .then(response => response.json())
      .then(data =>
        this.setState({
          activeRecipe: data.recipes[0]
        })
      )
      .catch(err => console.log("error fetching data", err));
  };

  render() {
    const recipe = this.state.activeRecipe;
    console.log(this.state);
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Author
              <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
