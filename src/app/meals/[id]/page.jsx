import React from 'react';


const fetchdata = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json();
        return data.meals[0] || [];
    } catch (error) {
        console.log(error);
        return []
    }

}

export async function generateMetadata({ params }) {
    const id = await params;
    const singlePost = await fetchdata(id.id);

    return {
        title: singlePost.strMeal,
        description: singlePost.strInstructions,
    }
}


const SingleMealPage = async ({ params }) => {
    const p = await params;

    const singleMeal = await fetchdata(p.id);

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Title Section */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    🍽️ {singleMeal.strMeal}
                </h1>
                <p className="text-gray-600 italic">
                    {singleMeal.strArea} • {singleMeal.strCategory}
                </p>
            </div>

            {/* Image and Info Section */}
            <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-lg p-6">
                <div className="md:w-1/2">
                    <img
                        src={singleMeal.strMealThumb}
                        alt={singleMeal.strMeal}
                        className="rounded-2xl w-full object-cover"
                    />
                    {singleMeal.strYoutube && (
                        <a
                            href={singleMeal.strYoutube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-4 text-center text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-all duration-300"
                        >
                            🎬 Watch Recipe Video
                        </a>
                    )}
                </div>

                {/* Ingredients Section */}
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
                        🍽️ Ingredients
                    </h2>
                    <ul className="list-disc list-inside">
                        {singleMeal.strIngredient1 && (
                            <li>{singleMeal.strIngredient1}</li>
                        )}
                        {singleMeal.strIngredient2 && (
                            <li>{singleMeal.strIngredient2}</li>
                        )}
                        {singleMeal.strIngredient3 && (
                            <li>{singleMeal.strIngredient3}</li>
                        )}
                        {/* Add more ingredients as needed */}
                    </ul>
                </div>

            </div>

            {/* Instructions Section */}
            <div className="mt-10 bg-white rounded-2xl shadow-md p-6 leading-relaxed">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
                    👩‍🍳 Instructions
                </h2>
                <p className="text-gray-700 whitespace-pre-line">
                    {singleMeal.strInstructions}
                </p>
            </div>

            {/* Tags Section */}
            {singleMeal.strTags && (
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        🏷️ Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {singleMeal.strTags.split(",").map((tag, i) => (
                            <span
                                key={i}
                                className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                            >
                                #{tag.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleMealPage;