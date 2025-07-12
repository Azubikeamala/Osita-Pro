import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Math Zone", path: "/math" },
    { name: "Craft Corner", path: "/crafts" },
    { name: "Story Time", path: "/story" },
    { name: "Build With Me", path: "/build" },
    { name: "Brain Boosters", path: "/brain" },
    { name: "My Friends", path: "/friends" },
    { name: "About Me", path: "/about" },
  ];

  return (
    <nav className="bg-blue-200 p-4 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-purple-700">
          Osita.pro
        </Link>

        {/* Hamburger Button for Small Screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-sm sm:text-base">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`hover:text-blue-800 ${
                location.pathname === item.path ? "font-semibold underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2 text-sm sm:text-base">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)} // close on link click
              className={`block px-4 py-2 hover:bg-blue-300 ${
                location.pathname === item.path ? "font-semibold underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
