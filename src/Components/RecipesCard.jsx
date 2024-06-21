const RecipesCard = ({ recipes }) => {
  return (
    <div className="recipecard">
      {recipes.map((recipe) => {
        return (
          <div
            className="card"
            onClick={() => {
              window.open(recipe["recipe"]["url"]);
            }}
            key={recipe["recipe"]["calories"]}
          >
            <img
              src={recipe["recipe"]["image"]}
              alt={recipe["recipe"]["label"]}
            />
            <div className="desc">
              <p className="label">{recipe["recipe"]["label"]}</p>
              <p className="source">{recipe["recipe"]["source"]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RecipesCard;
