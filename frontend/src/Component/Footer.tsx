export default function Footer() {
  return (
    <footer className="text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side - brand */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-white">Database Evolve Tracker</h2>
          <p className="text-sm text-gray-400">Making databases transparent, one change at a time.</p>
        </div>

        {/* Right side - links */}
        <div className="flex space-x-6 text-sm">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-6 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Database Evolve Tracker. All rights reserved.
      </div>
    </footer>
  )
}
