import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './recipeStore';

function App() {
  const { generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations(); // Trigger recommendation generation on initial render
  }, []);

  return (
    <BrowserRouter>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <FavoritesList />
        <RecipeList />
        <RecommendationsList />
        <Routes>
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
