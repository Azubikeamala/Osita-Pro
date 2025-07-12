import { Link } from "react-router-dom";

const HolidayHatMaker = () => {
  return (
    <div className="min-h-screen bg-pink-50 px-4 py-10 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
        🎉 Holiday Hat Maker
      </h1>
      <p className="text-gray-800 text-lg mb-6 max-w-2xl mx-auto">
        Make festive hats for birthdays, holidays, or just for fun! Use colored paper, glue, scissors, and decorations to create your masterpiece.
      </p>

      <div className="bg-white rounded-xl shadow-md max-w-xl mx-auto p-6 text-left">
        <h2 className="text-xl font-semibold mb-2 text-pink-500">Materials</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Colored cardstock or construction paper</li>
          <li>Glue or tape</li>
          <li>Scissors</li>
          <li>Stickers, glitter, pom-poms (optional)</li>
          <li>String or headband</li>
        </ul>
      </div>

      <div className="mt-8">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/DLDb6HIU1x8"
          title="Holiday Hat Craft"
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

export default HolidayHatMaker;
