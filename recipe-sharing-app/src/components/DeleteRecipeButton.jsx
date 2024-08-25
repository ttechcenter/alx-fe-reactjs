import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const navigate = useNavigate();
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    onDelete(recipeId);
    navigate('/recipes'); // Redirect to the recipe list after deletion
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
