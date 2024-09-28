import React from 'react';
import '../styles/RecommendedIngredients.scss'; // Optional: Create a separate SCSS file for styling

const RecommendedIngredients = () => {
  const recommendedPlaces = [
    { name: "Local Farmers Market", url: "https://www.localfarmersmarket.com" },
    { name: "Whole Foods", url: "https://www.wholefoods.com" },
    { name: "Trader Joe's", url: "https://www.traderjoes.com" },
    { name: "Instacart", url: "https://www.instacart.com" },
  ];

  return (
    <div className="recommended-ingredients">
      <h2>Where to Buy Ingredients</h2>
      <ul>
        {recommendedPlaces.map((place, index) => (
          <li key={index}>
            <a href={place.url} target="_blank" rel="noopener noreferrer">
              {place.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedIngredients;
