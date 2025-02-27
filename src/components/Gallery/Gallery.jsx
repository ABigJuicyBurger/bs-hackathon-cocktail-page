import { Link } from "react-router-dom";
import RecipeCard from "/src/components/RecipeCard/RecipeCard.jsx";
import "../../Styles/Gallery.scss";

const Gallery = ({ filterCocktails, defaultCocktails }) => {
  if (!defaultCocktails && !filterCocktails) {
    return <div>Loading cocktails...</div>;
  }

  const displayData =
    filterCocktails && filterCocktails.length > 0
      ? filterCocktails
      : defaultCocktails;

  if (!displayData || displayData.length === 0)
    return <div>No cocktails available</div>;

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
