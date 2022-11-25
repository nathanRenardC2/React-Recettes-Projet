import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRecettes from './components/Recettes/PageRecettes';
import PageBlog from './components/Blog/PageBlog';
import PageZoomRecette from './components/Recettes/PageZoomRecette';
import PageConnexion from './components/Connexion/PageConnexion';
import './assets/css/main.css';
import {useState} from 'react';
import { createContext } from 'react';
import useDarkMode from './components/useDarkMode';
import { Context } from 'react';

export const ConnexionContext = createContext();


function App() {

  const [users, setUsers] = useState([{
    pseudo: "admin",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    role: "admin",
    prenom: "Jules",
    nom: "Dupont",
    mdp: "admin"
  },
  {
    pseudo: "user",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    role: "user",
    prenom: "Julie",
    nom: "Lysbon",
    mdp: "user"
  }]);

  const [user, setUser] = useState({});
  const [isConnected, setIsConnected] = useState(false);

  useDarkMode();

  return (
    <ConnexionContext.Provider value={[users, user, setUser, isConnected, setIsConnected]}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageRecettes />} />
            <Route path="/blogs" element={<PageBlog />} />
            <Route path="/recette/:id" element={<PageZoomRecette />} />
            <Route path="/connexion" element={<PageConnexion />}/>
        </Routes>
      </BrowserRouter>
    </ConnexionContext.Provider>
  );
}

export default App;
