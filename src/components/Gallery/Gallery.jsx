import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "/src/components/RecipeCard/RecipeCard.jsx";
import "../../Styles/Gallery.scss";

const Gallery = () => {
  const [cocktails, setCocktails] = useState(null);

  const fetchCocktails = async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      setCocktails(response.data);
    } catch (error) {
      console.error(error);
      setCocktails(null);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  if (!cocktails || !cocktails.drinks) {
    return <div>Loading...</div>;
  }

  return (
    <section className="gallery">
      {cocktails.drinks.map((drink) => (
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
