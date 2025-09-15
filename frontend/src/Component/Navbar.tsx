import logo from "../assets/Generated Image September 13, 2025 - 11_07AM.png";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="flex items-center justify-between px-8 h-[80px]">
        {/* Left side (logo + title) */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border border-gray-700">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            Database Evolve Tracker
          </h1>
        </div>

        {/* Right side nav */}
        <div className="flex items-center space-x-8">
          {["About Us", "Let’s Connect"].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="relative text-lg font-medium text-gray-300 hover:text-white transition group"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
              {/* underline gradient effect */}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
