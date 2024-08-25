import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom'; // Import for using route parameters

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Extract recipe ID from route
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId)) // Parse ID to integer
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const { deleteRecipe } = useRecipeStore();

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} onDelete={() => deleteRecipe(recipe.id)} />
    </div>
  );
};
export default RecipeDetails;
