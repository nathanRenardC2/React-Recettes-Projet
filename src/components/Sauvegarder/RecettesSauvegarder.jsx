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
            {recettesSave.map((recette) => {
                return <Recette key={recette.idMeal} id={recette.idMeal} meal={recette}></Recette>
            })}
        </div>
    )
}