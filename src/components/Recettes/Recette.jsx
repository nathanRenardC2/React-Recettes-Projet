import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { RecettesSaveContext } from "./PageRecettes";

export default function Recette({ meal }) {

  const [recettesSave, setRecettesSave] = useContext(RecettesSaveContext);
  const [isSave, setIsSave] = useState(false);

  /**
   * Fonction permettant de sauvegarder une recette
   */
  function saveRecette() {
    // Si la recette est déjà sauvegarder on la supprime de la liste
    if (recettesSave.includes(meal)) {
      setRecettesSave(recettesSave.filter((recette) => recette !== meal));
      setIsSave(false);
    }
    // Sinon on l'ajoute à la liste
    else {
      setRecettesSave([...recettesSave, meal]);
      setIsSave(true);
    }
  }


  return (
    <div className="card bg-white dark:bg-slate-800 border-4 border-slate-300">
      <NavLink
        to={`/recette/${meal.idMeal}`}
        >
        <div className="p-4 text-black dark:text-white">
          <h2>{meal.strMeal}</h2>
          <p>Origin : {meal.strArea}</p>
          <img src={meal.strMealThumb} alt="" />
          <p className="text-justify">{meal.strInstructions.slice(0, 100)}...</p>
        </div>
      </NavLink>
      <div>
        <svg onClick={saveRecette} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-7 h-7 self-end mr-5 mb-3 hover:cursor-pointer hover:text-red-500 dark:text-white ${isSave ? "text-red-500" : ""}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </div>
    </div>
  );


}