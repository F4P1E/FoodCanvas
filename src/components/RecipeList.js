import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/RecipeList.scss';

const RecipeList = ({ searchQuery, category }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(''); // State for error messages

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true); // Set loading state to true
      setError(''); // Reset error state
      try {
        // Modify API URL based on category
        let url = `https://api.spoonacular.com/recipes/random?apiKey=81ad8615ca6340ef85c65ad21fab45e8&number=24`;
        if (category) {
          url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=81ad8615ca6340ef85c65ad21fab45e8&number=24&query=${category}`;
        }

        const response = await axios.get(url);
        if (response.data.recipes) {
          setRecipes(response.data.recipes);
        } else {
          setError('No recipes found.');
        }
      } catch (error) {
        console.error('Error fetching recipes', error);
        setError('Failed to fetch recipes. Please try again later.');
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };

    fetchRecipes();
  }, [category]);

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recipe-list">
      {loading ? ( // Show loading state
        <p>Loading recipes...</p>
      ) : error ? ( // Show error message
        <p>{error}</p>
      ) : filteredRecipes.length === 0 ? ( // No recipes found
        <p>No recipes found for your search.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h3 className="recipe-title">{recipe.title}</h3>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;
