import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 


const heroImages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
];

const categories = [
  { name: "Math Missions", icon: "🧮", bgColor: "bg-blue-100", path: "/math" },
  { name: "Craft Lab", icon: "🎨", bgColor: "bg-pink-200", path: "/crafts" },
  { name: "Story Time", icon: "📚", bgColor: "bg-yellow-200", path: "/story" },
  { name: "Build With Me", icon: "💡", bgColor: "bg-green-200", path: "/build" },
  { name: "Brain Boosters", icon: "🧠", bgColor: "bg-purple-200", path: "/brain" },
  { name: "My Friends", icon: "🧸", bgColor: "bg-orange-200", path: "/friends" },
];


const getRandomIndex = (excludeIndex, length) => {
  let index;
  do {
    index = Math.floor(Math.random() * length);
  } while (index === excludeIndex);
  return index;
};

const Home = () => {
  const [currentImage, setCurrentImage] = useState(() => Math.floor(Math.random() * heroImages.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => getRandomIndex(prev, heroImages.length));
    }, 4000); // Every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 leading-tight">
          Welcome to Osita’s Wonder Lab!
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Learn, create, and play with Osita. From math and crafts to storytelling and games!
        </p>

        <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-xl bg-white">
          <img
            src={heroImages[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="w-full h-[460px] object-cover transition-all duration-700"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">
          Explore Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
         {categories.map((cat, index) => (
          <Link
            to={cat.path}
            key={index}
            className={`${cat.bgColor} rounded-full px-4 py-3 text-center shadow hover:scale-105 transition-transform duration-200 cursor-pointer`}
          >
            <span className="block text-sm font-semibold text-gray-800 flex items-center justify-center gap-1">
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </span>
          </Link>
        ))}

        </div>
      </section>
    </div>
  );
};

export default Home;
