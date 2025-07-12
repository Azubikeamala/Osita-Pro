import React, { useState } from "react";
import { Link } from "react-router-dom";

const MathZone = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const gameIframes = {
    multiplication: "https://www.mathgames.com/skill/3.8-multiplication-facts-up-to-10",
    numberAdventure: "https://www.mathgames.com/skill/1.66-addition-and-subtraction-word-problems", // Example
    countColor: "https://www.mathgames.com/skill/1.55-counting-objects-up-to-10" // Example
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🧮 Welcome to Math Missions!
      </h1>
      <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto">
        Practice your math skills while having fun! Solve puzzles, go on number
        adventures, and challenge yourself with mini math games.
      </p>

      {!selectedGame ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Multiplication Maze */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              ✖️ Multiplication Maze
            </h2>
            <p className="text-gray-600 mb-4">
              Can you beat the maze by solving multiplication challenges?
            </p>
            <button
              onClick={() => setSelectedGame("multiplication")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Start Game
            </button>
          </div>

          {/* Number Adventure */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ➕ Number Adventure
            </h2>
            <p className="text-gray-600 mb-4">
              Help Osita collect treasures by solving addition and subtraction problems.
            </p>
            <button
              onClick={() => setSelectedGame("numberAdventure")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Play Now
            </button>
          </div>

          {/* Count & Color */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-purple-600 mb-2">
              🔢 Count & Color
            </h2>
            <p className="text-gray-600 mb-4">
              Count the objects, then color them based on your answer!
            </p>
            <button
              onClick={() => setSelectedGame("countColor")}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Try It
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto mt-8">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg border border-blue-300">
            <iframe
              src={gameIframes[selectedGame]}
              title="Math Game"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => setSelectedGame(null)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              ← Back to Missions
            </button>
          </div>
        </div>
      )}

      <div className="text-center mt-12">
        <Link
          to="/"
          className="text-blue-500 hover:underline font-semibold text-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MathZone;
