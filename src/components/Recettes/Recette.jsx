import { NavLink } from "react-router-dom";
import Loading from "../Loading";

export default function Recette({ meal }) {
  return (
    <NavLink
      className="card"
      to={`/recette/${meal.idMeal}`}
      >
      <div>
        <h2>{meal.strMeal}</h2>
        <p>Origin : {meal.strArea}</p>
        <img src={meal.strMealThumb} alt="" />
        <p>{meal.strInstructions.slice(0, 300)}...</p>
      </div>
    </NavLink>
  );


}