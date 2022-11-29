import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRecettes from './components/Recettes/PageRecettes';
import PageBlog from './components/Blog/PageBlog';
import PageZoomRecette from './components/Recettes/PageZoomRecette';
import './assets/css/main.css';
import useDarkMode from './components/Hook/useDarkMode';
import PageRecettesSauvegarder from './components/RecettesSave/PageRecettesSauvegarder';
import { createContext, useEffect } from 'react';
import { useState } from 'react';

export const RecettesSaveContext = createContext();

function App() {

  useDarkMode();

  const [recettesSave, setRecettesSave] = useState([]);

  useEffect(() => {
    // Si il y'a des recettes sauvegarder dans le localStorage on les récupère
    if (localStorage.getItem('recettes')) {
      setRecettesSave(JSON.parse(localStorage.getItem('recettes')));
    }
  }, []);


  return (
    <RecettesSaveContext.Provider value={[recettesSave, setRecettesSave]}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageRecettes />} />
            <Route path="/blogs" element={<PageBlog />} />
            <Route path="/recette/:id" element={<PageZoomRecette />} />
            <Route path="/recettes-save" element={<PageRecettesSauvegarder />} />
        </Routes>
      </BrowserRouter>
    </RecettesSaveContext.Provider>
  );
}

export default App;
