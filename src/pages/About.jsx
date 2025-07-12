const About = () => {
  return (
    <div className="min-h-screen bg-yellow-50 px-6 py-12 text-center">
      <h2 className="text-4xl font-bold text-yellow-600 mb-4">👦 About Me</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Hi, I'm <span className="font-semibold text-yellow-700">Osita</span>! I'm 8 years old and I love
        <span className="text-pink-500 font-medium"> math</span>,
        <span className="text-green-500 font-medium"> crafts</span>,
        <span className="text-blue-500 font-medium"> robots</span>, and
        <span className="text-purple-600 font-medium"> storytelling</span>. <br />
        With help from my grown-up, I built this website to share what makes me smile 🌈.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-60">
          <div className="text-4xl mb-2">🧮</div>
          <p className="font-bold text-gray-800">Math Lover</p>
          <p className="text-sm text-gray-500 mt-1">Numbers are like puzzles I get to solve!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-60">
          <div className="text-4xl mb-2">🎨</div>
          <p className="font-bold text-gray-800">Craft Creator</p>
          <p className="text-sm text-gray-500 mt-1">Paper, glue, and imagination – let's make stuff!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-60">
          <div className="text-4xl mb-2">🤖</div>
          <p className="font-bold text-gray-800">Robot Fan</p>
          <p className="text-sm text-gray-500 mt-1">I dream of building a robot friend someday!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-60">
          <div className="text-4xl mb-2">📚</div>
          <p className="font-bold text-gray-800">Storyteller</p>
          <p className="text-sm text-gray-500 mt-1">I love stories — telling them, writing them, living them!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
