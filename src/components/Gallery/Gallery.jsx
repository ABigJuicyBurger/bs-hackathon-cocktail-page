import { Link } from "react-router-dom";
import RecipeCard from "/src/components/RecipeCard/RecipeCard.jsx";
import "./Gallery.scss";

const Gallery = ({ searchResults, defaultCocktails }) => {
  // Show loading when default cocktails aren't loaded yet
  if (!defaultCocktails && !searchResults) {
    return <div>Loading cocktails...</div>;
  }

  // Determine which dataset to display
  const displayData =
    searchResults || (defaultCocktails && defaultCocktails.drinks);

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
