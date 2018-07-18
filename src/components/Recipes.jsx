import React from "react";
import {Link} from "react-router-dom";

const Recipes = (props) => {
  return (
    <div className="container">
      <div className="row">
{/* condition to map only if there is recipes in the App state to avoid mapping of null error  */}
      {props.recipes &&
        props.recipes.map ((recipe)=> {
          return (
            <div
              key={recipe.recipe_id}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                <img
                  className="recipes__box-img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <div className="recipe__text">
                  <h5>
                  {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                  </h5>
                  <p className="recipes_subtitle">
                    Author: <span>{recipe.publisher}</span>
                  </p>
                </div>
                <button className="recipe_buttons">
                <Link to={{ 
                  pathname: `/recipe/${recipe.recipe_id}`,
                  state:{ recipe : recipe.title }
                  }}>View Recipe</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Recipes;
