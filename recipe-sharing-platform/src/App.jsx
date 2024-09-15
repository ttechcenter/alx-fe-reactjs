import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  

  return (
    <>
      <HomePage />
<Router>
  <Routes>
     <Route path='/'  element={<HomePage />} />
    <Route path='/recipe/:id' element={<RecipeDetail />} />
  </Routes>
</Router>

<AddRecipeForm />
    </>
  );
}

export default App;
