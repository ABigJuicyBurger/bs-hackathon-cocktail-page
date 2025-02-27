import './RecipeCard.scss'

const RecipeCard = ({ title, image, alt }) => {
    return (
      <article className = "recipecard">
        <h1 className = "recipecard__title">{title}</h1>
        <img className = "recipecard__image" src ={image + "/small"} alt ={alt}/>
      </article>
    )
};

export default RecipeCard