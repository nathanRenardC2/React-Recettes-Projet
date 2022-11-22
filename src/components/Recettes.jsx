import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recette from './Recette';
import Search from './Search';

export default function Recettes() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
        .then(response => {
         if(response.data.meals === null){
            setData([]);
         } else {
            setData(response.data);
        }
        }
        )
        .catch(error => console.log(error));
    }, [search]);
  
  
    return (
      <div className="App">
        <h1 className='text-3xl mb-6'>Recettes de cuisine</h1>
        <Search search={search} setSearch={setSearch}></Search>
        <div className="card_list">
          {data.length !== 0 ? data.meals.map((meal) => (
              <Recette key={meal.idMeal} meal={meal}></Recette>
            )) : <p>Il n'y a pas de recette correspondant à votre recherche</p>}
        </div>
      </div>
    );
}