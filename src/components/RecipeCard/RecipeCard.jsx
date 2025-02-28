import "./RecipeCard.scss";

const RecipeCard = ({ title, image, alt }) => {
  return (
    <div className="recipelist">
      <article className="recipecard">
        <img className="recipecard__image" src={image} alt={alt} />
        <h1 className="recipecard__title">{title}</h1>
      </article>
    </div>
  );
};

export default RecipeCard;
