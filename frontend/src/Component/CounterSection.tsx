import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { CounterSectionCard } from "../Constant/CounterSection";

export const CounterSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10 bg-black"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {CounterSectionCard.map((item, index) => (
        <motion.div
          key={index}
          className="p-8 rounded-2xl bg-gray-900 border border-gray-700 text-center shadow-md hover:shadow-pink-500/20 hover:border-pink-500 transition"
          variants={card}
          whileHover={{ scale: 1.08, y: -8 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src={item.icon}
            alt={item.title}
            className="w-20 h-20 mx-auto mb-4"
          />
          <h3 className="mt-2 text-xl font-semibold text-white">
            {item.title}
          </h3>

          {/* Counter number */}
          <Counter target={item.count} />
        </motion.div>
      ))}
    </motion.div>
  );
};

type CounterProps = { target: number };

function Counter({ target }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [target]);

  return (
    <motion.p className="text-4xl font-extrabold mt-3 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
      {rounded}
    </motion.p>
  );
}
