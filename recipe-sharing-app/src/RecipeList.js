import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes } = useRecipeStore();
  const displayedRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {displayedRecipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
