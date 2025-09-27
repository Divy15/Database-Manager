import logo from "../assets/Generated Image September 13, 2025 - 11_07AM.png";
import userPhoto from "../assets/photo.png";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let navbarLogo = logo;
  let navbarName = "Database Evolve Tracker";
  const userNavbarNavLink = [
    location.pathname==="/raise/request" ? "DB Info" : "Raise DB Request", 
    location.pathname==="/merge/request" ? "DB Info" : "Merge Request", 
    location.pathname==="/request/history" ? "DB Info" : "Request History",
    location.pathname==="/database/registery" ? "DB Info" : "Database Registry",
    "Logout"];
  const navItems = [
    location.pathname === "/about" ? "Home" : "About Us",
    "Let’s Connect",
    "Login",
  ];
  let navbarLink = navItems;

  const defaultNavbarPathView = ["/about", "/login", "/signpu", "/", "/contact"];


  const handleNavLink = (item: string) => {
    if (item === "About Us") {
      navigate("/about");
    } else if (item === "Home") {
      navigate("/");
    } else if (item === "Let’s Connect") {
      navigate("/contact");
    } else if(item === "Raise DB Request"){
      navigate("raise/request")
    } else if(item === "DB Info"){
      navigate("/dashboard")
    } else if(item === "Merge Request"){
      navigate("/merge/request")
    }else if(item === "Request History"){
      navigate("/request/history")
    }else if(item === 'Database Registry'){
      navigate("/database/registery")
    }else {
      navigate("/login");
    }
  };

  // Conditionally render user photo
  if(!defaultNavbarPathView.includes(location.pathname)){
    navbarLogo = userPhoto;
    navbarName = "Divy Gandhi";
    navbarLink = userNavbarNavLink;
  }

  return (
    <div className="fixed z-10 top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-8 h-[80px]">
        {/* Left side (logo + title) */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border border-gray-700">
            <img src={navbarLogo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            {navbarName}
          </h1>
        </div>

        {/* Right side nav */}
        <div className="flex items-center space-x-8">
          {navbarLink.map((item, index) => (
            <motion.button
              key={index}
              className="relative group text-lg font-medium text-gray-300 hover:text-white transition group"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavLink(item)}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
              {/* underline gradient effect */}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
