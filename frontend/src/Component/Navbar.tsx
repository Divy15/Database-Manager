import logo from "../assets/Generated Image September 13, 2025 - 11_07AM.png";
import { motion } from "framer-motion"


export const Navbar = () => {

    return (
        <>
        <div>
  <div className="flex items-center justify-between px-6 h-[80px]">
    {/* Left side (logo) */}
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full">
        <img src={logo} alt="" className="border rounded-[50%]"/>
      </div>

    {/* Center title */}
    <div className="mx-2">
    <h1 className="text-2xl font-bold text-center ">
      Database Evolve Tracker
    </h1>
    </div>
    </div>

    {/* Right side nav */}
    <div className="flex justify-end items-center space-x-4">
      <motion.button
        className="text-[20px]"
        whileHover={{ scale: 1.1, y: -2, color: "#3b82f6" }}
        whileTap={{ scale: 0.95 }} 
        transition={{ type: "spring", stiffness: 300 }}
      >
        About Us
      </motion.button>

      <motion.button
        className="text-[20px]"
        whileHover={{ scale: 1.1, y: -2, color: "#3b82f6" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Let’s Connect
      </motion.button>
    </div>
  </div>
</div>
        </>
    )
}