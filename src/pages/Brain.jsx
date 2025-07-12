import { Link } from "react-router-dom";

const boosters = [
  {
    title: "Riddle Me This!",
    icon: "🧩",
    description: "Solve tricky, funny riddles that stretch your brain and tickle your funny bone. Great for solo or family play!",
    button: "Try Riddles",
    route: "/brain/riddles",
    color: "bg-indigo-600",
  },
  {
    title: "Pattern Detective",
    icon: "🔍",
    description: "Can you find what comes next? Use logic to crack color, number, or shape sequences before time runs out!",
    button: "Play Game",
    route: "/brain/pattern",
    color: "bg-yellow-500",
  },
  {
    title: "Memory Match Challenge",
    icon: "🧠",
    description: "Flip cards and test your memory. Match all pairs as fast as you can and track your best score!",
    button: "Start Matching",
    route: "/brain/memory",
    color: "bg-pink-500",
  },
];

const Brain = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
        🧠 Welcome to Brain Boosters!
      </h1>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10 px-4">
        Time to stretch your brain! Dive into puzzles, memory games, and fun challenges
        that make you think deeply and laugh loudly while learning.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {boosters.map((boost, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-left flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2 flex items-center gap-2">
                <span>{boost.icon}</span>
                <span>{boost.title}</span>
              </h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">{boost.description}</p>
            </div>
            <Link
              to={boost.route}
              className={`${boost.color} text-white text-center py-2 mt-2 rounded shadow hover:scale-105 transform transition`}
            >
              {boost.button}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link to="/" className="text-blue-600 hover:underline text-lg">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Brain;
