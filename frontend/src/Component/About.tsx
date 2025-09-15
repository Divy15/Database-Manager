import { motion } from "framer-motion";
import { AboutFeatures } from "../Constant/AboutFeaturesCard";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-black py-20 text-center text-white relative overflow-hidden">
        {/* glowing accent */}
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-3xl -translate-x-1/2"></div>

        <motion.h1
          className="relative text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="relative mt-6 text-lg md:text-2xl max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Making Databases Transparent, One Change at a Time
        </motion.p>
      </div>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-300">
        <motion.p
          className="text-lg md:text-xl text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-pink-400">Database Evolve Tracker</span>{" "}
          helps teams keep track of every schema change, function, trigger, and
          relationship. No more guesswork — know who changed what, when, and why.
        </motion.p>

        {/* Mission */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Mission
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our mission is to bring clarity and accountability to database
            management. We believe databases should evolve transparently, with
            full visibility for developers, administrators, and decision-makers.
          </p>
        </motion.div>

        {/* Features */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Key Features
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {AboutFeatures.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-gray-900 border border-gray-700 text-center hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition"
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-20 mx-auto mb-5"
              />
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-400 text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
