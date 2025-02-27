import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "/src/components/RecipeCard/RecipeCard.jsx";
import "../../Styles/Gallery.scss";

const Gallery = ({ searchResults: filterCocktails, defaultCocktails }) => {
  // Show loading when default cocktails aren't loaded yet
  if (!defaultCocktails && !filterCocktails) {
    return <div>Loading cocktails...</div>;
  }

  // Determine which dataset to display
  const displayData =
    filterCocktails || (defaultCocktails && defaultCocktails.drinks);

  if (!displayData) return <div>No cocktails available</div>;

  return (
    <section className="gallery">
      {displayData.slice(0, 6).map((drink) => (
        <Link
          key={drink.idDrink}
          to={`/cocktail/${drink.idDrink}`}
          className="gallery__link"
        >
          <RecipeCard
            title={drink.strDrink}
            image={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
        </Link>
      ))}
    </section>
  );
};

export default Gallery;
