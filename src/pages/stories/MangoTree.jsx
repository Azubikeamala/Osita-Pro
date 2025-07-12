import { Link } from "react-router-dom";

const MangoTree = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-4">
        🥭 The Talking Mango Tree
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
        Osita stumbles upon a mango tree that speaks in riddles—can you solve them all?
        This story is full of wonder, wisdom, and a few giggles.
      </p>

      <div className="bg-white rounded-xl shadow-md max-w-3xl mx-auto p-6 text-left text-gray-800 leading-relaxed text-lg">
        <p>
          One sunny afternoon, young Osita chased a butterfly through the fields behind his grandmother's compound. 
          The butterfly flitted and danced, weaving through bushes and leaping over puddles until it vanished into a quiet grove of mango trees.
        </p>

        <p className="mt-4">
          Osita stepped into the shade of the grove, wiping his forehead. Just as he turned to leave, he heard a whisper—soft and low, like the wind talking. 
          “Who disturbs my nap?” the voice asked.
        </p>

        <p className="mt-4">
          Osita froze. “W-Who’s there?”
        </p>

        <p className="mt-4">
          The bark of the oldest mango tree cracked open slightly, revealing a carved face with kind eyes and a leafy crown. “It is I,” said the tree. 
          “I am Mango, the riddler of the grove. If you answer my riddles, I shall reward you with golden fruit sweeter than honey. But fail, and you must sweep my roots for one whole week!”
        </p>

        <p className="mt-4">
          Osita’s eyes sparkled. “I accept!” he said boldly.
        </p>

        <p className="mt-4">
          The tree rustled its leaves and asked, “I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?”
        </p>

        <p className="mt-4">
          Osita tilted his head. He thought of the forest, the wind, and the sound it made. “An echo?” he guessed.
        </p>

        <p className="mt-4">
          The mango tree chuckled. “Very good, boy.”
        </p>

        <p className="mt-4">
          And so it continued—riddle after riddle. Osita answered each one with a grin, drawing on stories his grandfather once told him under the stars.
          Finally, the tree bowed and said, “You have a curious mind and a good heart. For that, take this.”
        </p>

        <p className="mt-4">
          With a shimmer of light, a mango larger than a coconut dropped into Osita’s hands. It was warm to the touch and smelled of vanilla, honey, and sunlight.
          “Share it,” the tree added, “for wisdom tastes better when it is passed on.”
        </p>

        <p className="mt-4">
          Osita ran home, fruit in hand and heart full of wonder. That day, the mango fed not just his family, but half the village—and Osita became known as “the boy who outsmarted a tree.”
        </p>
      </div>

      <div className="mt-10">
        <Link
          to="/story-time"
          className="text-blue-600 hover:underline text-lg"
        >
          ← Back to Story Time
        </Link>
      </div>
    </div>
  );
};

export default MangoTree;
