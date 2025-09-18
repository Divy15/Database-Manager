import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side - brand */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">
            Database Evolve Tracker
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Making databases transparent, one change at a time.
          </p>
        </div>

        {/* Right side - links */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex space-x-6 text-sm font-medium">
            <a href="/about" className="hover:text-indigo-400 transition">About</a>
            <a href="/contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & bottom text */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Database Evolve Tracker</span>. All rights reserved.
      </div>
    </footer>
  );
}
