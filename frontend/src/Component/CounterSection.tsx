import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"
import { CounterSectionCard } from "../Constant/CounterSection"

export const CounterSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const card = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { opacity: 1, scale: 1, y: 0 },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {CounterSectionCard.map((item, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-xl text-center border shadow-sm hover:shadow-lg transition"
          variants={card}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img src={item.icon} alt={item.title} className="w-20 h-20 mx-auto" />
          <h3 className="mt-4 text-[25px] font-semibold">{item.title}</h3>
          
          {/* Counter number */}
          <Counter target={item.count} />
        </motion.div>
      ))}
    </motion.div>
  )
}

type CounterProps = { target: number }

function Counter({ target }: CounterProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString())

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" })
    return controls.stop
  }, [target])

  return (
    <motion.p className="text-3xl font-bold">
      {rounded}
    </motion.p>
  )
}
