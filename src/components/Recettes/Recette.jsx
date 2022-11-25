import { NavLink } from "react-router-dom";

export default function Recette({ meal }) {
  return (
    <NavLink
      className="card bg-white dark:bg-slate-800 border-4 border-slate-300"
      to={`/recette/${meal.idMeal}`}
      >
      <div className="p-4 text-black dark:text-white">
        <h2>{meal.strMeal}</h2>
        <p>Origin : {meal.strArea}</p>
        <img src={meal.strMealThumb} alt="" />
        <p className="text-justify">{meal.strInstructions.slice(0, 100)}...</p>
      </div>
    </NavLink>
  );


}