"use client"
import React, { useEffect, useState } from 'react';

const MealPage = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');


    const fetchdata = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json();
            setMeals(data?.meals || ["No match found"]);
        } catch (error) {
            console.log(error);
            return []
        }

    }

    useEffect(() => {
        fetchdata();
    }, [search])


    return (
        <div>
            <div className='mb-5'>
                <legend>Search Your Meal</legend>
                <input type="text" onChange={(e) => setSearch(e.target.value)} className='input' placeholder='Enter the desired meal' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {meals.map((meal) => (
                    <div key={meal.idMeal}>
                        <img className='mb-2' src={meal.strMealThumb} alt={meal.strMeal} />
                        <h2><span className='text-xl font-bold '>Dish Name:</span>  {meal.strMeal}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealPage;