import { Link } from "react-router-dom";

const stories = [
  {
    title: "Ada’s Magic Drum",
    icon: "🥁",
    description: "Follow Ada as she discovers a magical drum that helps her bring joy to her village.",
    button: "Read Story",
    color: "bg-purple-600",
    link: "/stories/ada-drum",
  },
  {
    title: "The Talking Mango Tree",
    icon: "🥭",
    description: "Osita stumbles upon a mango tree that speaks in riddles—can you solve them all?",
    button: "Listen Now",
    color: "bg-yellow-600",
    link: "/stories/mango-tree",
  },
  {
    title: "Timi and the Sky Dancers",
    icon: "☁️",
    description: "Timi climbs a rainbow and meets dancers in the clouds who teach him how to float.",
    button: "Start Reading",
    color: "bg-pink-600",
    link: "/stories/sky-dancers",
  },
];

const Story = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
        📚 Welcome to Story Time!
      </h1>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
        Cozy up with Osita and dive into magical tales filled with fun, mystery, and imagination.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stories.map((story, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-purple-500 mb-2 flex items-center gap-2">
              <span>{story.icon}</span>
              <span>{story.title}</span>
            </h3>
            <p className="text-gray-700 mb-4">{story.description}</p>
           <Link
            to={story.link}
            className={`${story.color} text-white px-4 py-2 rounded shadow hover:opacity-90 transition inline-block mt-2`}
            >
            {story.button}
            </Link>

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

export default Story;
