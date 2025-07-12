import { Link } from "react-router-dom";

const RecycledRobot = () => {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-10 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
        🤖 Recycled Robot
      </h1>
      <p className="text-gray-800 text-lg mb-6 max-w-2xl mx-auto">
        Build your very own robot using cardboard boxes, bottle caps, and a whole lot of imagination!
      </p>

      <div className="bg-white rounded-xl shadow-md max-w-xl mx-auto p-6 text-left">
        <h2 className="text-xl font-semibold mb-2 text-green-500">Materials</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Cardboard boxes (like cereal or tissue boxes)</li>
          <li>Bottle caps, straws, foil</li>
          <li>Glue or tape</li>
          <li>Markers or paint</li>
          <li>Googly eyes (optional)</li>
        </ul>
      </div>

      <div className="mt-8">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Eadu3LkrOEA"
          title="Recycled Robot Craft"
          className="rounded-xl shadow-md max-w-2xl mx-auto"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-10">
        <Link to="/craft-corner" className="text-blue-600 hover:underline text-lg">
          ← Back to Craft Corner
        </Link>
      </div>
    </div>
  );
};

export default RecycledRobot;
