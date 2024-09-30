import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/RecipeList.scss';

const RecipeList = ({ searchQuery, category, handleCategoryChange }) => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError('');
      try {
        let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
        if (category) {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        }

        const response = await axios.get(url);
        if (response.data.meals) {
          setRecipes(response.data.meals);
        } else {
          setError('No recipes found.');
        }
      } catch (error) {
        console.error('Error fetching recipes', error);
        setError('Failed to fetch recipes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [category]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-title">Browse Categories</h2>
      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat.idCategory}
            onClick={() => handleCategoryChange(cat.strCategory)}
            className={`category-button ${cat.strCategory === category ? 'active' : ''}`}
          >
            {cat.strCategory}
          </button>
        ))}
      </div>
      {loading ? (
        <p>Loading recipes...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredRecipes.length === 0 ? (
        <p>No recipes found for your search.</p>
      ) : (
        <div className="recipes-grid">
          {filteredRecipes.map(recipe => (
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal} className="recipe-card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
              <h3 className="recipe-title">{recipe.strMeal}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
