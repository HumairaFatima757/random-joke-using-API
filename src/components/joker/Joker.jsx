import React, { useEffect, useState } from "react";

const Joker = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch joke:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-center mt-4 text-white">
      {loading ? (
        <p>Loading...</p>
      ) : joke ? (
        <div>
          <h2 className="text-xl font-bold">Random Joke</h2>
          {joke.type === "single" ? (
            <p>{joke.joke}</p>
          ) : (
            <div>
              <p><strong>{joke.setup}</strong></p>
              <p>{joke.delivery}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Failed to load joke.</p>
      )}
    </div>
  );
};

export default Joker;
