const characters = [
  {
    name: "Splunki",
    emoji: "🦄",
    funFact: "Loves rainbow slides and glitter glue!",
  },
  {
    name: "Numberblocks",
    emoji: "🔢",
    funFact: "Can count to infinity (almost!)",
  },
  {
    name: "Buzzy Bee",
    emoji: "🐝",
    funFact: "Knows every flower by name!",
  },
  {
    name: "Wally the Whale",
    emoji: "🐳",
    funFact: "Sings lullabies underwater!",
  },
  {
    name: "Dot the Robot",
    emoji: "🤖",
    funFact: "Solves puzzles faster than you can blink!",
  },
  {
    name: "Kiki Koala",
    emoji: "🐨",
    funFact: "Loves naps and eucalyptus ice cream!",
  },
];

const Friends = () => {
  return (
    <div className="min-h-screen bg-green-50 p-8 text-center">
      <h2 className="text-4xl font-bold text-green-600 mb-4">🧸 My Friends</h2>
      <p className="text-lg text-gray-700 mb-10">
        Meet Osita’s favorite characters like Splunki, Numberblocks, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {characters.map((char, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-5xl mb-2">{char.emoji}</div>
            <h3 className="text-xl font-bold text-green-700">{char.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{char.funFact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
