import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recette from './Recette';
import Search from './Search';
import Loading from '../Loading';
import { useCallback } from 'react';

export default function Recettes() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
        .then(response => {
         if(response.data.meals === null || response.data.meals === undefined){ // On vérifie qu'il est undefined car l'api peut avoir certains bug lors de la requette
            setData([]);
            setLoading(false);
         } else {
            setData(response.data);
            setLoading(false);
          }
        })
        .catch(error => console.log(error));

    }, [search]);

    return (
      <div className='p-10'>
        <div className="text-center">
          <h1 className='text-3xl dark:text-white mb-6'>Recettes de cuisine</h1>
          <Search search={search} setSearch={setSearch}></Search>
        {loading ? <Loading/> : 
          <div className="card_list">
            {(data.length !== 0) ? data.meals.map((meal) => {
                  return <Recette key={meal.idMeal} meal={meal}></Recette>
            }) : <p className='text-center mt-10 text-black dark:text-white'>Aucune recette ne correspond à votre recherche</p>}
          </div>
        }
        </div>
      </div>
    );
  }