import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { getHotelsThunk } from '../store/states/hotels.slice';
import {useDispatch} from 'react-redux'
import './style/Filters.css'

const CategoryFilter = () => {

    const url= 'https://booking-node.onrender.com/cities'
     const [cities, getCities] = useFetch(url);

   useEffect (() =>{
    getCities();
   },[]);


   const dispatch = useDispatch();

   const handleFilterCity =(id)=>{
    let url;


    if (id) {
        url =`https://booking-node.onrender.com/hotels/1hotels?cityId=${id}`;
    } else{
        url = 'https://booking-node.onrender.com/hotels/1hotels';
    }
     dispatch (getHotelsThunk(url));
   };



  
  return (
    <section className='category__filter'>
        <h3 className='category__name'>Cities</h3>
        <ul className='category__list'>
        <li className='category__item' onClick={() => handleFilterCity()}>all cities</li>
        {cities?.map((city) => (
           <li className='category__item' onClick={() => handleFilterCity(city.id)} key ={city.id}>{city.name}</li>

        ))}
        </ul>
      
    </section>
  )
}

export default CategoryFilter
