import React, { useState } from "react";
import { Link } from "react-router-dom";

const puzzles = [
  {
    type: "number",
    sequence: "2, 4, 6, 8, ...",
    question: "What comes next?",
    options: ["9", "10", "11"],
    answer: "10",
    hint: "It's increasing by 2",
  },
  {
    type: "number",
    sequence: "3, 6, 9, 12, ...",
    question: "What comes next?",
    options: ["14", "15", "18"],
    answer: "15",
    hint: "Multiples of 3",
  },
  {
    type: "number",
    sequence: "21, 18, 15, 12, ...",
    question: "What comes next?",
    options: ["10", "9", "6"],
    answer: "9",
    hint: "Subtracting 3 each time",
  },
  {
    type: "color",
    sequence: ["🔴", "🔵", "🔴", "🔵", "🔴", "..."],
    question: "What color comes next?",
    options: ["🔵", "🟢", "⚫"],
    answer: "🔵",
    hint: "Alternating red and blue",
  },
  {
    type: "color",
    sequence: ["🟡", "🟡", "🔴", "🟡", "🟡", "🔴", "..."],
    question: "What comes next?",
    options: ["🟡", "🔴", "🟢"],
    answer: "🟡",
    hint: "Two yellows, one red",
  },
  {
    type: "logic",
    sequence: "A, C, E, G, ...",
    question: "What comes next?",
    options: ["H", "I", "J"],
    answer: "I",
    hint: "Every second letter in the alphabet",
  },
  {
    type: "logic",
    sequence: "Mon, Wed, Fri, ...",
    question: "What comes next?",
    options: ["Sat", "Sun", "Sun"],
    answer: "Sun",
    hint: "Skipping one day",
  },
  {
  type: "number",
  sequence: "5, 10, 20, 40, ...",
  question: "What comes next?",
  options: ["60", "70", "80"],
  answer: "80",
  hint: "Doubling each time",
},
{
  type: "number",
  sequence: "100, 90, 80, 70, ...",
  question: "What comes next?",
  options: ["60", "65", "55"],
  answer: "60",
  hint: "Decreasing by 10",
},
{
  type: "color",
  sequence: ["🔵", "🔵", "🔴", "🔵", "🔵", "🔴", "..."],
  question: "What color comes next?",
  options: ["🔴", "🔵", "🟢"],
  answer: "🔵",
  hint: "Two blues, one red",
},
{
  type: "logic",
  sequence: "1, 4, 9, 16, 25, ...",
  question: "What comes next?",
  options: ["36", "30", "28"],
  answer: "36",
  hint: "Perfect squares",
},
{
  type: "logic",
  sequence: "Z, X, V, T, ...",
  question: "What comes next?",
  options: ["R", "Q", "S"],
  answer: "R",
  hint: "Alphabet moving backwards, skipping one letter",
},
{
  type: "color",
  sequence: ["🔴", "🟡", "🔴", "🟡", "🔴", "..."],
  question: "What color comes next?",
  options: ["🟡", "🔵", "🔴"],
  answer: "🟡",
  hint: "Red, yellow alternating",
},
{
  type: "number",
  sequence: "1, 1, 2, 3, 5, 8, ...",
  question: "What comes next?",
  options: ["13", "11", "10"],
  answer: "13",
  hint: "Fibonacci sequence",
},
{
  type: "logic",
  sequence: "Sunday, Monday, Tuesday, ...",
  question: "What comes next?",
  options: ["Wednesday", "Friday", "Saturday"],
  answer: "Wednesday",
  hint: "Days of the week",
},
{
  type: "color",
  sequence: ["🔵", "🔴", "🟡", "🔵", "🔴", "..."],
  question: "What color comes next?",
  options: ["🟡", "🔴", "🔵"],
  answer: "🟡",
  hint: "Repeating 3-color cycle",
},
{
  type: "number",
  sequence: "2, 4, 8, 16, 32, ...",
  question: "What comes next?",
  options: ["48", "60", "64"],
  answer: "64",
  hint: "Powers of 2",
},
{
  type: "logic",
  sequence: "J, F, M, A, M, ...",
  question: "What comes next?",
  options: ["J", "N", "O"],
  answer: "J",
  hint: "Months of the year",
},
{
  type: "number",
  sequence: "50, 45, 40, 35, ...",
  question: "What comes next?",
  options: ["25", "30", "32"],
  answer: "30",
  hint: "Subtracting 5",
},
{
  type: "color",
  sequence: ["🟢", "🟢", "🟢", "🔴", "🟢", "🟢", "..."],
  question: "What color comes next?",
  options: ["🔴", "🟢", "🔵"],
  answer: "🟢",
  hint: "Three greens, one red",
},
{
  type: "logic",
  sequence: "1, 3, 6, 10, 15, ...",
  question: "What comes next?",
  options: ["21", "20", "22"],
  answer: "21",
  hint: "Adding +2, +3, +4, etc.",
},
{
  type: "logic",
  sequence: "Circle, Triangle, Square, Circle, Triangle, ...",
  question: "What comes next?",
  options: ["Square", "Circle", "Star"],
  answer: "Square",
  hint: "Repeating shape pattern",
},
{
  type: "number",
  sequence: "90, 81, 72, 63, ...",
  question: "What comes next?",
  options: ["54", "55", "50"],
  answer: "54",
  hint: "Subtracting 9",
},
{
  type: "logic",
  sequence: "Apple, Banana, Apple, Banana, Apple, ...",
  question: "What comes next?",
  options: ["Banana", "Apple", "Orange"],
  answer: "Banana",
  hint: "Alternating fruits",
},
{
  type: "color",
  sequence: ["🔴", "🔴", "🔴", "🔴", "..."],
  question: "What color comes next?",
  options: ["🔴", "🔵", "🟢"],
  answer: "🔴",
  hint: "It's a trick one—no change!",
},
{
  type: "number",
  sequence: "1, 3, 7, 15, 31, ...",
  question: "What comes next?",
  options: ["63", "61", "60"],
  answer: "63",
  hint: "2n - 1",
},
{
  type: "logic",
  sequence: "Socks, Shoes, Socks, Shoes, ...",
  question: "What comes next?",
  options: ["Socks", "Shoes", "Shirt"],
  answer: "Socks",
  hint: "Alternating clothing items",
},
{
  type: "color",
  sequence: ["🟢", "🔴", "🟢", "🔴", "🟢", "..."],
  question: "What color comes next?",
  options: ["🔴", "🟢", "🔵"],
  answer: "🔴",
  hint: "Green, red, alternating",
},
{
  type: "number",
  sequence: "8, 6, 4, 2, ...",
  question: "What comes next?",
  options: ["1", "0", "-1"],
  answer: "0",
  hint: "Decreasing by 2",
},
{
  type: "logic",
  sequence: "Left, Right, Left, Right, ...",
  question: "What comes next?",
  options: ["Right", "Left", "Middle"],
  answer: "Left",
  hint: "Alternating directions",
},
{
  type: "color",
  sequence: ["🔵", "🔵", "🔴", "🔴", "🔵", "🔵", "..."],
  question: "What color comes next?",
  options: ["🔴", "🔵", "🟢"],
  answer: "🔴",
  hint: "Two blues, two reds, repeat",
},

];

const PatternGame = () => {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(
    Math.floor(Math.random() * puzzles.length)
  );
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState("");

  const puzzle = puzzles[currentPuzzleIndex];

  const handleAnswer = (option) => {
    if (option === puzzle.answer) {
      setFeedback("✅ Correct! Great job!");
      setTimeout(() => {
        setFeedback("");
        setShowHint(false);
        setCurrentPuzzleIndex(Math.floor(Math.random() * puzzles.length));
      }, 1200);
    } else {
      setFeedback("❌ Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 text-center py-10 px-4">
      <h1 className="text-3xl font-bold text-amber-700 mb-2">
        🔍 Pattern Detective
      </h1>
      <p className="text-gray-700 mb-8">
        Look closely, detective! What comes next in the pattern?
      </p>

      <div className="bg-white max-w-xl mx-auto p-6 rounded-xl shadow-lg">
        <div className="text-xl font-bold mb-4">
          {Array.isArray(puzzle.sequence)
            ? puzzle.sequence.join(" ")
            : puzzle.sequence}
        </div>
        <div className="text-lg mb-4">{puzzle.question}</div>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {puzzle.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow transition duration-150"
            >
              {opt}
            </button>
          ))}
        </div>

        {feedback && (
          <div
            className={`text-lg font-semibold mb-2 ${
              feedback.includes("Correct") ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback}
          </div>
        )}

        {!showHint && (
          <button
            className="text-blue-600 underline text-sm"
            onClick={() => setShowHint(true)}
          >
            Need a hint?
          </button>
        )}
        {showHint && (
          <div className="text-sm text-gray-600 mt-2 italic">{puzzle.hint}</div>
        )}
      </div>

      <div className="mt-10">
        <Link to="/brain" className="text-blue-700 underline">
          ← Back to Brain Boosters
        </Link>
      </div>
    </div>
  );
};

export default PatternGame;
