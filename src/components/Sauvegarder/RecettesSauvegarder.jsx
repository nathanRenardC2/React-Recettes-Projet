import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { RecettesSaveContext } from "../../App";
import { NavLink } from "react-router-dom";
import Recette from "../Recettes/Recette";

export default function RecettesSauvegarder(){

    
    const [recettesSave, setRecettesSave] = useContext(RecettesSaveContext);

    return(
        <div className="card_list">
            {recettesSave != null ? recettesSave.map((meal, index) => (
                <Recette meal={meal} id={meal.idMeal} key={index} />
            )) : <p className="text-center text-black dark:text-white">Aucune recette sauvegarder</p>}
        </div>
    )
}