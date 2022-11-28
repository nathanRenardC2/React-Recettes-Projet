import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRecettes from './components/Recettes/PageRecettes';
import PageBlog from './components/Blog/PageBlog';
import PageZoomRecette from './components/Recettes/PageZoomRecette';
import './assets/css/main.css';
import useDarkMode from './components/useDarkMode';
import PageRecettesSauvegarder from './components/Sauvegarder/PageRecettesSauvegarder';

function App() {

  useDarkMode();

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageRecettes />} />
            <Route path="/blogs" element={<PageBlog />} />
            <Route path="/recette/:id" element={<PageZoomRecette />} />
            <Route path="/recettes-save" element={<PageRecettesSauvegarder />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
