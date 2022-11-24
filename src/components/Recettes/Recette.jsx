import { NavLink } from "react-router-dom";
import Loading from "../Loading";

export default function Recette({ meal }) {
  return (
    <NavLink
      className="card"
      to={`/recette/${meal.idMeal}`}
      >
      <div className="p-4">
        <h2>{meal.strMeal}</h2>
        <p>Origin : {meal.strArea}</p>
        <img src={meal.strMealThumb} alt="" />
        <p className="text-justify">{meal.strInstructions.slice(0, 100)}...</p>
      </div>
    </NavLink>
  );


}