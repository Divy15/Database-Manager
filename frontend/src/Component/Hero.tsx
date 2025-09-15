import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative flex h-[560px] items-center justify-center bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-purple-600 opacity-20 blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-pink-500 opacity-10 blur-3xl"></div>

      {/* Content */}
      <motion.div
        className="relative text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold italic bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Database Changes. Documented. Together.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 italic leading-relaxed">
          Empower your team to track edits, add notes, and manage database
          evolution with confidence.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <motion.a
            href="#get-started"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
          <motion.a
            href="#learn-more"
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-pink-500 hover:text-white transition"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
