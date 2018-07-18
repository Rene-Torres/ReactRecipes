import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
import Loading from './components/Loading'

const API_KEY = process.env.REACT_APP_API_KEY //Add your key from food2fork.com
class App extends Component {


  state = {
    recipes: [],
    load: false,
  }

  getRecipe = (e) => {

    //Using https://cors-anywhere... before endpoint to bypass access control.
    e.preventDefault()

    const recipeName = e.target.elements.recipeName.value;
    const URL = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`

    this.setState({
      load: true
    }, () => {

      fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({
          recipes: data.recipes,
          load: false
        }))
        .catch(err => console.log("error fetching data", err))
    })
  }

  //loads the prev state from local storage
  componentWillMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json)
    this.setState({
      recipes: recipes
    })
  }


  //store the search in local storage
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }


  render() {
    return ( <div className = "App" >
      <header className = "App-header" >
        <h1 className = "App-title" > Recipe Search </h1> 
      </header> <Form getRecipe = {this.getRecipe}/> {
        this.state.load ? < Loading/> :
          <Recipes recipes = {
            this.state.recipes
          }
        />
      } </div>
    );
  }
}

export default App;