'use client';

import { use, useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">
                Meal ideas for “{ingredient}”
            </h3>
            {meals.length === 0 ? (
                <p class="text-sm text-gray-500">No meals found.</p>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {meals.map(meal => (
                        <li key={meal.idMeal} className="border rounded p-2">
                            <p className="font-medium">{meal.strMeal}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.meals || [];
}
