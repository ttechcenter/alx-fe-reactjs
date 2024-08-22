import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import useRecipeStore from './recipeStore'; // Import the store

const App = () => {
  const recipes = useRecipeStore(state => state.recipes); // Access recipes from store

  return (
    <div className="App">
      <h1>Recipe Manager</h1>
      {recipes.length === 0 && <p>No recipes yet. Add some!</p>}
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
