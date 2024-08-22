import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [ // Initial state with optional predefined recipes
    // { id: 1, title: "Pizza", description: "Delicious Italian dish" },
  ],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default recipeStore;
