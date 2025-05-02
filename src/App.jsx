import React, { useState } from "react";

const App = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    setJoke(null);
    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await res.json();
      setJoke(data);
    } catch (err) {
      console.error("Error fetching joke:", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-md">🎭 Random Joke Generator</h1>
      
      <button
        onClick={getJoke}
        className="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        Get a Joke
      </button>

      {loading && <p className="mt-6 text-xl animate-pulse">Loading...</p>}

      {joke && (
        <div className="mt-8 max-w-xl text-center bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
          <h3 className="text-2xl font-semibold mb-4">Here's a joke for you:</h3>
          {joke.type === "single" ? (
            <p className="text-lg">{joke.joke}</p>
          ) : (
            <>
              <p className="text-lg font-medium">{joke.setup}</p>
              <p className="text-lg mt-2">{joke.delivery}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
