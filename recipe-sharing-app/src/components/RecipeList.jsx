import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes } = useRecipeStore();
  const displayedRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {displayedRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
