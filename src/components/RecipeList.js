import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/RecipeList.scss';

const RecipeList = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://api.spoonacular.com/recipes/random?apiKey=YOUR_API_KEY&number=30')
      .then(response => {
        const categorizedRecipes = response.data.recipes.map(recipe => ({
          ...recipe,
          category: recipe.diets.includes('vegetarian') ? 'Vegetarian' : 'Workout', // Example categorization
        }));
        setRecipes(categorizedRecipes);
      })
      .catch(error => console.error('Error fetching recipes', error));
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recipe-list">
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h3 className="recipe-title">{recipe.title}</h3>
            <p className="recipe-category">{recipe.category}</p>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;
