import { Link } from "react-router-dom";

const SkyDancers = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4 sm:px-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
        ☁️ Timi and the Sky Dancers
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
        Timi climbs a rainbow and meets dancers in the clouds who teach him how to float.
        Let your imagination soar with this dreamy adventure.
      </p>

      <div className="bg-white rounded-xl shadow-md max-w-3xl mx-auto p-6 text-left text-gray-800 leading-relaxed text-lg">
        <p>
          After a summer rain, the village of Udume lay wrapped in a soft mist, with drops of water clinging to every leaf like crystal beads.
          Timi, a curious boy with big dreams and an even bigger imagination, stared at the sky as a rainbow painted itself boldly across the clouds.
        </p>

        <p className="mt-4">
          “I wonder what’s at the end of it,” he whispered.
        </p>

        <p className="mt-4">
          Without thinking twice, he took off—barefoot, determined. As he ran, the grass gave way to light, and his feet landed not on soil, but on color.
          The rainbow, to his amazement, held him. It felt like silk and shimmered like water, lifting him higher with each step.
        </p>

        <p className="mt-4">
          Higher and higher he climbed, the clouds parting gently for him. Then, just above the last arc of violet, Timi found them—figures twirling in the sky, graceful as birds and glowing like moonlight.
        </p>

        <p className="mt-4">
          “Welcome, Earth Walker,” said one, spinning mid-air with a laugh that sounded like wind chimes.
        </p>

        <p className="mt-4">
          “Who are you?” Timi asked, wide-eyed.
        </p>

        <p className="mt-4">
          “We are the Sky Dancers,” another replied. “We move with the breeze, leap with the lightning, and float with the clouds. Would you like to learn?”
        </p>

        <p className="mt-4">
          And so began Timi’s lesson. He learned how to shift his weight with the wind’s rhythm, how to twirl without falling, and how to feel the heartbeat of the sky.
          The Dancers sang ancient songs in languages only clouds understood, and Timi’s heart felt lighter than ever before.
        </p>

        <p className="mt-4">
          But as the sun began to set, painting the world gold and coral, the Sky Dancers slowed.
        </p>

        <p className="mt-4">
          “You must return,” one said gently. “No one can dance forever. Not even us.”
        </p>

        <p className="mt-4">
          Timi nodded, sadness in his eyes, but wonder in his soul. As he descended the rainbow, the clouds waved goodbye, and the dancers vanished into mist.
        </p>

        <p className="mt-4">
          He touched the earth again just as the last light faded from the sky. His clothes were dry, his feet dusty—but something had changed. He walked with lighter steps. And when he closed his eyes, he could still hear the music of the wind.
        </p>

        <p className="mt-4">
          From that day on, Timi never stopped dancing—on the ground, in his dreams, and sometimes, just maybe, back on a rainbow when no one was looking.
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

export default SkyDancers;
