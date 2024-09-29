import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import '../styles/RecipeDetail.scss';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=c3f89cc5aa2944ba87a0c60afcb3a275`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe details', error));
  }, [id]);

  if (!recipe) return <div className="loading">Loading...</div>;

  const calories = recipe.nutrition?.nutrients?.find(nutrient => nutrient.title === 'Calories')?.amount || 'N/A';

  return (
    <div className="recipe-detail">
      <h2 className="recipe-title">{recipe.title}</h2>
      <p className="recipe-category">Category: {recipe.diets.join(', ')}</p> {/* Display category */}
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      
      <div className="recipe-info">
        <p><strong>Preparation Time:</strong> {recipe.readyInMinutes} minutes</p>
        <p><strong>Calories:</strong> {calories} kcal</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Spoonacular Score:</strong> {recipe.spoonacularScore}%</p>
      </div>

      <h3>Summary</h3>
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipe.summary) }} />

      <h3>Ingredients</h3>
      <ul className="ingredients-list">
        {recipe.extendedIngredients.map(ingredient => (
          <li key={ingredient.id} className="ingredient-item">{ingredient.original}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <div
        className="instructions"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipe.instructions) }}
      />
    </div>
  );
};

export default RecipeDetail;
