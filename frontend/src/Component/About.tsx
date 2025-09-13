import { motion } from "framer-motion"
import { AboutFeatures } from "../Constant/AboutFeaturesCard"

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Making Databases Transparent, One Change at a Time
        </motion.p>
      </div>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.p
          className="text-lg md:text-xl text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          Database Evolve Tracker helps teams keep track of every schema change, 
          function, trigger, and relationship. No more guesswork — know who 
          changed what, when, and why.
        </motion.p>

        {/* Mission */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-10 text-lg">
            Our mission is to bring clarity and accountability to database management. 
            We believe databases should evolve transparently, with full visibility for 
            developers, administrators, and decision-makers.
          </p>
        </motion.div>

        {/* Features */}
        <motion.h2
          className="text-3xl font-semibold mb-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Key Features
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {AboutFeatures.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl  text-center border"
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={item.icon} alt={item.title} className="w-20 h-20 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-lg">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
