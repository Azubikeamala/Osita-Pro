import { Link } from "react-router-dom";

const Riddles = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">🧩 Riddle Me This!</h1>
      <p className="text-gray-700 max-w-xl mx-auto mb-6">
        Can you solve these silly and smart riddles? Let’s find out!
      </p>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-xl mx-auto text-left space-y-4">
        <p className="font-medium">1. What has hands but can’t clap?</p>
        <p className="font-medium">2. What goes up but never comes down?</p>
        <p className="font-medium">3. I’m tall when I’m young, and short when I’m old. What am I?</p>
        <p className="italic text-sm text-gray-500">More riddles and answers coming soon!</p>
      </div>

      <div className="mt-10">
        <Link to="/brain" className="text-blue-600 hover:underline text-lg">
          ← Back to Brain Boosters
        </Link>
      </div>
    </div>
  );
};

export default Riddles;
