import { Link } from "react-router-dom";

const builds = [
  {
    title: "Build a Cardboard Castle",
    icon: "🏰",
    description: "Use empty boxes to make a mini castle with windows, towers, and a working drawbridge.",
    button: "Start Building",
    color: "bg-blue-600",
  },
  {
    title: "Bottle Cap Car",
    icon: "🚗",
    description: "Create a race car from bottle caps, straws, and cardboard. Make it roll with rubber bands!",
    button: "Build Now",
    color: "bg-green-600",
  },
  {
    title: "Lego Puzzle Tower",
    icon: "🧱",
    description: "Use your LEGO blocks to build a tower that balances different puzzle pieces.",
    button: "Let’s Go!",
    color: "bg-red-500",
  },
];

const Build = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
        💡 Welcome to Build With Me!
      </h1>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
        Grab your tools, tape, or toys and let’s build awesome things together! These projects are fun, simple, and use everyday items you already have.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {builds.map((build, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-green-500 mb-2 flex items-center gap-2">
              <span>{build.icon}</span>
              <span>{build.title}</span>
            </h3>
            <p className="text-gray-700 mb-4">{build.description}</p>
            <button className={`${build.color} text-white px-4 py-2 rounded shadow hover:opacity-90 transition`}>
              {build.button}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/" className="text-blue-600 hover:underline text-lg">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Build;
