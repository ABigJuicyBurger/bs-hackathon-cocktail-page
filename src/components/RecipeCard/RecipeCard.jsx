import './RecipeCard.scss'

const RecipeCard = ({ title, image, alt }) => {
    return (
      <article className = "recipecard">
        <img className = "recipecard__image" src ={image + "/small"} alt ={alt}/>
        <h1 className = "recipecard__title">{title}</h1>
      </article>
    )
};

export default RecipeCard