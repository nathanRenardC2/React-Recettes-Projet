import Menu from "../Menu"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PageZoomRecette(props){
    // On récupère l'id placé dans l'url
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    // On récupère les données de l'api
    const [data, setData] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [measures, setMeasures] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
        .then(response => {
            setData(response.data.meals[0]);
            
        })
        .catch(error => console.log(error));
        console.log(data);
    }, []);

    useEffect(() => {
        getIngredients();
        getMeasures();
    }, [data]);

    /**
     * Fonction qui permet de mettre les ingrédients dans un tableau pour les afficher
     */
    function getIngredients(){
        let ingredients = [];
        for(let i = 1; i <= 20; i++){
            if(data["strIngredient" + i] !== null && data["strIngredient" + i] !== ""){
                ingredients.push(data["strIngredient" + i]);
            }
        }
        setIngredients(ingredients);
    }

    /**
     * Fonction qui permet de mettre les mesures dans un tableau pour les afficher
     */
    function getMeasures(){
        let measures = [];
        for(let i = 1; i <= 20; i++){
            if(data["strMeasure" + i] !== null && data["strMeasure" + i] !== ""){
                measures.push(data["strMeasure" + i]);
            }
        }
        setMeasures(measures);
    }


    


    return (
        <>
            <Menu />
            <div className="flex justify-center">
                <div className="mb-10 p-10 md:p-4 w-10/12 md:w-2/3 bg-slate-50 drop-shadow-xl rounded-lg">
                    <div className="flex flex-col items-center md:mb-10 md:mt-5">
                        <h1 className="text-xl mb-3 md:text-5xl font-bold">{data.strMeal} ( {data.strArea} )</h1>
                        <p className="md:text-xl font-medium md:mt-3">Category : {data.strCategory}</p>
                    </div>
                    <div className="md:flex flex-col md:justify-between md:items-center m-5">
                        <img className="rounded-lg drop-shadow-xl border-4 mb-5 md:mb-0 text-justify" src={data.strMealThumb} alt={data.strMeal + "_image"} />
                        <div className="md:flex md:flex-col md:items-center md:mt-10">
                            <hr />
                            <h2 className="text-center md:text-start font-bold text-xl md:text-2xl mb-3">Ingredients :</h2>
                            <ul className="flex flex-col items-center mb-3">
                                {ingredients.map((ingredient, index) => (
                                    <li className="flex flex-col items-center md:flex-row mb-2" key={index}>
                                        <p className="md:mr-2">{measures[index]}</p>
                                        <p className="hidden md:block mr-2">-</p>
                                        <p>{ingredient}</p>
                                    </li>
                                ))}
                            </ul>
                            <hr />
                        </div>
                    </div>
                    <div className="md:m-10">
                        <h2 className="text-center text-xl md:text-2xl font-bold mb-3">Instructions : </h2>
                        <p className="text-center">{data.strInstructions}</p>
                    </div>
                </div>
            </div>
        </>
    )

}