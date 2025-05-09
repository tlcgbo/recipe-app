import { useState } from 'react';

function Homepage() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    if (!query.trim()) return;

    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=6&apiKey=${apiKey}`
      );
      const data = await response.json();
      setRecipes(data.results || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <main className="bg-gradient-to-br bg-black min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center max-w-2xl space-y-6 w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Delicious Recipes</span>
        </h1>
        <p className="text-white text-lg md:text-xl">
          Instantly find recipes based on your ingredients or cravings. Let's get cooking!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2">
          <input
            type="text"
            placeholder="Search recipes (e.g. pasta, chicken)..."
            className="w-full md:w-96 px-5 py-3 text-white rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-400 outline-none transition"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={fetchRecipes}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition shadow-lg"
          >
            Search
          </button>
        </div>
      </div>

      {/* Display Recipes */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="w-full mt-2 rounded-lg" />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Homepage;
