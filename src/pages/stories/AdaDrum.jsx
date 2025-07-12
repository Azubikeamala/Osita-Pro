import { Link } from "react-router-dom";

const AdaDrum = () => {
  return (
    <div className="min-h-screen bg-purple-50 px-4 py-10 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-600 mb-2">
          🥁 Ada’s Magic Drum
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Follow Ada as she discovers a magical drum that helps her bring joy to her village.
          This heartwarming tale celebrates courage, kindness, and the magic of music.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto text-left text-lg leading-relaxed">
        <p className="mb-4">
          In the quiet village of Nkata, nestled between mango groves and red earth paths, lived a young girl named Ada. She wasn’t the loudest child or the fastest runner, but Ada had something special — laughter that sparkled like morning dew and a love for rhythm that made her hands tap on anything she could find: buckets, benches, her grandmother’s cooking pots.
        </p>

        <p className="mb-4">
          Ada’s village had once been known for its joyful music festivals, where drums echoed through the hills and dancers twirled in colorful wrappers. But in recent years, the drums had fallen silent. A long drought had made the crops fail, and sadness settled over the land like dust.
        </p>

        <p className="mb-4">
          Still, Ada drummed. When no one was watching, she’d tap her fingers on tree trunks and hum melodies as she fetched water. “One day,” she whispered to her little brother, “I’ll bring the music back.”
        </p>

        <p className="mb-4">
          One afternoon, while wandering deeper into the forest than usual, Ada stumbled upon a curious clearing she’d never seen before. In the center stood a large, ancient tree with roots like twisted ropes and bark etched with patterns. At its base was a drum — round, smooth, and carved with glowing symbols that shimmered in the shade.
        </p>

        <p className="mb-4">
          As she touched it, the drum vibrated gently. Ada gasped.
        </p>

        <p className="mb-4">
          A deep, gentle voice echoed from the tree: <em>“Only the pure of heart may play the drum of Nkata.”</em>
        </p>

        <p className="mb-4">
          Nervous but brave, Ada struck the drum softly.
        </p>

        <p className="mb-4 font-semibold text-purple-500">Boom.</p>

        <p className="mb-4">
          A gust of wind swept through the clearing. The leaves danced.
        </p>

        <p className="mb-4 font-semibold text-purple-500">Boom. Boom.</p>

        <p className="mb-4">
          The sun broke through the clouds. Somewhere, a flower bloomed.
        </p>

        <p className="mb-4">
          Ada played and played, and with each beat, the magic spread — laughter returned to her village, the skies opened up with rain, and the people came out of their huts, drawn by the music they thought was gone forever.
        </p>

        <p className="mb-4">
          When she returned with the drum, her grandmother wept.
        </p>

        <p className="mb-4">
          “You’ve brought back our joy,” she said.
        </p>

        <p className="mb-4">
          From that day on, Ada led every festival. She taught other children how to drum, not just with their hands, but with their hearts.
        </p>

        <p className="mb-4">
          And deep in the forest, the old tree still watches, ready to pass the magic to the next kind soul who listens with more than just their ears.
        </p>

        <p className="italic text-center mt-6 text-purple-600 font-medium">💫 The End. And the beat goes on...</p>
      </div>

      <div className="text-center mt-10">
        <Link to="/story-time" className="text-blue-600 hover:underline text-lg">
          ← Back to Story Time
        </Link>
      </div>
    </div>
  );
};

export default AdaDrum;
