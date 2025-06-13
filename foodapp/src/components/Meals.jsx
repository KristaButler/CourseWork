import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Meal from './Meal';
import { fetchMeals } from '../http.js';

export default function Meals() {
  const { isFetching, fetchedData: meals } = useFetch(fetchMeals, []);

  return (
    <>
      {isFetching && meals.length <= 0 && <p className='center'>Loading...</p>}
      {!isFetching && meals.length <= 0 && (
        <p className='center'>
          Sorry, there are no available meals. Please try again later.
        </p>
      )}
      {!isFetching && meals.length > 0 && (
        <ul id='meals'>
          {meals.map((meal) => (
            <Meal
              key={meal.id}
              item={meal}
            />
          ))}
        </ul>
      )}
    </>
  );
}
