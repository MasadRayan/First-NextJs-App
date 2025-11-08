import MealSearchInput from "./components/MealSearchInput";

const MealPage = async ({searchParams}) => {
    
    const query = await searchParams;

    const fetchdata = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            return data.meals || [];
        } catch (error) {
            console.log(error);
            return []
        }

    }

    const meals = await fetchdata();

    return (
        <div>
            <MealSearchInput />
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