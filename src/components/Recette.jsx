export default function Recette({ meal }) {
  return (
    <div className="card">
        <h2>{meal.strMeal}</h2>
        <p>Origin : {meal.strArea}</p>
        <img src={meal.strMealThumb} alt="" />
        <p>{meal.strInstructions.slice(0, 300)}...</p>
    </div>
  );


}