const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  return (
    <button onClick={() => onDelete(recipeId)}>Delete Recipe</button>
  );
};
