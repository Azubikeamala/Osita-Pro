import { Link } from "react-router-dom";

const PaperPuppets = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4 text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">✂️ Paper Puppets</h1>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Make your own talking animal puppets! Gather paper, glue, markers, and scissors and follow the steps below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
        {[1, 2, 3, 4].map((num) => (
          <img
            src={`/placeholders/paper-step${num}.jpg`}
            alt={`Step ${num}`}
            className="w-full h-64 object-contain rounded shadow mb-2 bg-white"
            />

        ))}
      </div>

      <Link to="/craft-corner" className="text-blue-600 hover:underline">
        ← Back to Craft Corner
      </Link>
    </div>
  );
};

export default PaperPuppets;
