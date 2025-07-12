import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const emojiSet = ["🐸", "🚗", "🍎", "🐶", "🎈", "🌼"];

const generateShuffledCards = () => {
  const cards = [...emojiSet, ...emojiSet]
    .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }))
    .sort(() => 0.5 - Math.random());
  return cards;
};

const MemoryMatch = () => {
  const [cards, setCards] = useState(generateShuffledCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCount, setMatchedCount] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;

      if (cards[first].emoji === cards[second].emoji) {
        setTimeout(() => {
          const updated = [...cards];
          updated[first].matched = true;
          updated[second].matched = true;
          setCards(updated);
          setFlippedCards([]);
          setMatchedCount((prev) => prev + 1);
        }, 500);
      } else {
        setTimeout(() => {
          const updated = [...cards];
          updated[first].flipped = false;
          updated[second].flipped = false;
          setCards(updated);
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || cards[index].flipped || cards[index].matched) return;

    const updated = [...cards];
    updated[index].flipped = true;
    setCards(updated);
    setFlippedCards((prev) => [...prev, index]);
  };

  const handleRestart = () => {
    setCards(generateShuffledCards());
    setFlippedCards([]);
    setMatchedCount(0);
  };

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4 text-center">
      <h1 className="text-3xl font-bold text-pink-700 mb-3">🧠 Memory Match Challenge</h1>
      <p className="text-gray-700 mb-6">
        Flip the cards and match the pairs. Can you remember where everything is?
      </p>

      <div className="grid grid-cols-4 gap-4 justify-center max-w-md mx-auto mb-6">
        {cards.map((card, idx) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(idx)}
            className={`w-16 h-16 text-2xl rounded-lg border shadow-md flex items-center justify-center transition ${
              card.flipped || card.matched ? "bg-white" : "bg-pink-300"
            }`}
          >
            {(card.flipped || card.matched) ? card.emoji : "?"}
          </button>
        ))}
      </div>

      <button
        onClick={handleRestart}
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-5 py-2 rounded-md shadow-md transition"
      >
        🔁 Restart
      </button>

      <div className="mt-8">
        <Link to="/brain" className="text-blue-600 hover:underline text-lg">
          ← Back to Brain Boosters
        </Link>
      </div>

      {matchedCount === emojiSet.length && (
        <div className="mt-6 text-green-700 font-bold text-xl">
          🎉 Great memory! You matched them all!
        </div>
      )}
    </div>
  );
};

export default MemoryMatch;
