import { Link } from "react-router-dom";
import RecipeCard from "/src/components/RecipeCard/RecipeCard.jsx";
import "./Gallery.scss";

const Gallery = ({ filterCocktails }) => {
  console.log("Gallery received:", filterCocktails); // Log to check the data being passed

  // Check if there are no cocktails or empty array
  if (!filterCocktails || filterCocktails.length === 0) {
    return <div>No drinks found!</div>;
  }

  const cocktailLimit = filterCocktails.slice(0, 6); // Limit the number of cocktails

  return (
    <section className="gallery">
      {cocktailLimit.map((drink) => (
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
