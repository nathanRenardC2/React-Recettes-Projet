import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recette from './Recette';
import Search from './Search';
import Loading from '../Loading';

export default function Recettes() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [allCategories, setAllCategories] = useState();
    const [category, setCategory] = useState(undefined);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
        .then(response => {
         if(response.data.meals === null){
            setData([]);
            setLoading(false);
         } else {
            setData(response.data);
            setLoading(false);
          }
        })
        .catch(error => console.log(error));

    }, [category, search]);

    useEffect(() => {      
      // Récupération des catégories
      axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => {
          setAllCategories(response.data.categories);
        })
        .catch(error => console.log(error));
    }, []);

    /**
     * Fonction qui permet de récupérer la catégorie sélectionnée
     */
    function handleChangeCategory(event) {
      if(event.target.value === ""){
        setCategory(undefined);
      } else {
        setCategory(event.target.value);
      }
    }

    return (
      <div className="App">
        <h1 className='text-3xl mb-6'>Recettes de cuisine</h1>
        <Search search={search} setSearch={setSearch}></Search>
        {allCategories && 
          <div className='flex justify-center'>
            <div className='flex flex-wrap justify-center w-2/3 md:w-1/2'>
              <button className='bg-blue-500 hover:bg-blue-600 text-white p-2 m-2 rounded-lg' onClick={handleChangeCategory}>All</button>
              {allCategories.map((category, index) => {
                return <button key={index} className='bg-blue-500 hover:bg-blue-600 text-white p-2 m-2 rounded-lg' onClick={handleChangeCategory} value={category.strCategory}>{category.strCategory}</button>
              }
              )}
            </div>
          </div>
        }

       {loading ? <Loading/> : 
        <div className="card_list">
          {(data.length !== 0) ? data.meals.map((meal) => {
              if(category === meal.strCategory || category === undefined){
                return <Recette key={meal.idMeal} meal={meal}></Recette>
              }
          }) : <p className='mt-10'>Il n'y a pas de recette correspondant à votre recherche</p>}
        </div>
       }
      </div>
    );
  }