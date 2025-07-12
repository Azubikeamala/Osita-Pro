import { Link } from "react-router-dom";

const NatureCollage = () => {
  return (
    <div className="min-h-screen bg-purple-50 px-4 py-10 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
        🍃 Nature Collage
      </h1>
      <p className="text-gray-800 text-lg mb-6 max-w-2xl mx-auto">
        Turn nature into art! Collect leaves, flowers, and twigs to create a beautiful collage that celebrates the outdoors.
      </p>

      <div className="bg-white rounded-xl shadow-md max-w-xl mx-auto p-6 text-left">
        <h2 className="text-xl font-semibold mb-2 text-purple-500">Materials</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Leaves, flowers, twigs</li>
          <li>Glue or tape</li>
          <li>Construction paper</li>
          <li>Crayons or watercolor (optional)</li>
        </ul>
      </div>

      <div className="mt-8">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/_B7PQ5ghlK8"
          title="Nature Collage for Kids"
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

export default NatureCollage;
