import { Link } from "react-router-dom";

const CraftCorner = () => {
  const crafts = [
    {
      title: "Paper Puppets",
      icon: "✂️",
      description: "Make your own talking animal puppets using paper, glue, and markers!",
      button: "Start Craft",
      color: "bg-blue-500",
      path: "/crafts/paper-puppets"
    },
    {
      title: "Recycled Robot",
      icon: "🤖",
      description: "Turn old boxes and bottle caps into your very own robot creation!",
      button: "Build Now",
      color: "bg-green-500",
      path: "/crafts/recycled-robot"
    },
    {
      title: "Holiday Hat Maker",
      icon: "🎉",
      description: "Create fun hats for birthdays, Christmas, or even silly hat day!",
      button: "Let’s Go!",
      color: "bg-yellow-500",
      path: "/crafts/holiday-hats"
    },
    {
      title: "Nature Collage",
      icon: "🍃",
      description: "Collect leaves, flowers, and twigs to design a beautiful nature-inspired artwork.",
      button: "Start Collecting",
      color: "bg-purple-500",
      path: "/crafts/nature-collage"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
        🎨 Welcome to the Craft Corner!
      </h1>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
        Unleash your creativity with Osita! From paper crafts and recycled art to seasonal projects and DIY fun, there’s always something exciting to make.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {crafts.map((craft, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-pink-500 mb-2 flex items-center gap-2">
              <span>{craft.icon}</span>
              <span>{craft.title}</span>
            </h3>
            <p className="text-gray-700 mb-4">{craft.description}</p>
            <Link to={craft.path}>
              <button className={`${craft.color} text-white px-4 py-2 rounded shadow hover:opacity-90 transition`}>
                {craft.button}
              </button>
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

export default CraftCorner;
