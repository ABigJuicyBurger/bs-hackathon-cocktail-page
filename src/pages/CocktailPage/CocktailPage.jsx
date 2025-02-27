import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CocktailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  const getSingleCocktail = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setCocktail(response.data.drinks[0]);
    } catch (error) {
      console.error(error);
      setCocktail(null);
    }
  };

  useEffect(() => {
    getSingleCocktail();
  }, [id]);

  if (!cocktail) {
    return <div>Making your drink...</div>;
  }
  const filteredInstructions = cocktail.strInstructions.replace(
    /\b\d+\./g,
    "."
  );

  const instructions = filteredInstructions
    .split(".")
    .map((step) => step.trim())
    .filter((step) => step.length > 0);

  return (
    <section className="cocktail">
      <div className="cocktail__container">
        <h2 className="cocktail__title">{cocktail.strDrink}</h2>
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="cocktail__image"
        />
        <h3 className="cocktail__instructions">Instructions</h3>
        <ul className="cocktail__steps">
          {instructions.map((step, index) => (
            <li key={index} className="cocktail__step">
              {step}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CocktailPage;
