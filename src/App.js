import React from "react";
import "./App.css";
import Axios from "axios";
import burger from "./Assets/burger.png";
import { useState } from "react";
import RecipesCard from "./Components/RecipesCard";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [ispending, setIspending] = useState(false);
  const [error, setError] = useState(true);
  const YOUR_APP_ID = "77953416";
  const YOUR_APP_KEY = "80d0452a560197a06895f432dd1ff747";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  const SearchRecipes = (e) => {
    e.preventDefault();
    setIspending(true);
    Axios.get(url)
      .then((response) => {
        setRecipes(response.data.hits);
        setIspending(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setIspending(null);
      });
  };
  return (
    <div className="app">
      <div className="wrapper">
        <img src={burger} alt="" className="burger" />
        <div className="navbar">
          <div className="advert">
            <h2>'RECIPES AND NUTRITON'</h2>
            <span>by Tablefood</span>
          </div>
        </div>
        <div className="searchbar">
          <div className="logo">TF </div>
          <h2>TABLEFOOD</h2>
          <form onSubmit={SearchRecipes}>
            <input
              type="text"
              placeholder="Search recipes"
              className="search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <input type="submit" value="search" className="submit" />
          </form>
        </div>
        <div className="filter">
          <div>
            <span className="refine">REFINE SEARCH BY </span>
            <span>Calories, Diet, Ingredients</span>
          </div>
          <select>
            <option value="vegan">vegan</option>
          </select>
        </div>
      </div>
      <h2 className="error">{error}</h2>
      {ispending && <div className="spin"></div>}
      <RecipesCard recipes={recipes} />
    </div>
  );
}

export default App;
