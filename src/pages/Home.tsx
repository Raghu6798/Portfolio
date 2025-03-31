import React, { useState } from "react";
import { motion } from "framer-motion";
import { RGBName } from "../components/RGBName";
import { SiLangchain } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiPandas } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { Sparkle, Terminal } from "lucide-react";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techStack = [
    { name: "Python", icon: FaPython },
    { name: "LangChain", icon: SiLangchain },
    { name: "Pandas", icon: SiPandas },
    { name: "Streamlit", icon: SiStreamlit },
    {name:"PyTorch",icon:SiPytorch},
    {name:"Tensorflow",icon:SiTensorflow},
    {name:"Scikit-Learn",icon:SiScikitlearn},
    {name:"Keras",icon:SiKeras}
]

  return (
    <motion.div
      className="min-h-screen md:min-h-[120vh] flex flex-col items-center justify-center p-8 scroll-smooth overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Title Section */}
      <motion.div
        className="flex items-center gap-2 text-xl text-purple-400 mb-6 mt-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Terminal className="w-6 h-6" />
        <span>Generative AI Developer</span>
        <Sparkle className="w-6 h-6" />
      </motion.div>

      <RGBName name="Raghu Nandan" />

      <motion.p
        className="mt-8 text-xl text-gray-400 max-w-2xl text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Crafting the future of AI-powered applications with creative solutions
        and cutting-edge technology.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-12 flex gap-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button onClick={() => navigate("/projects")}
        className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
          View Projects
        </button>
        <button onClick={() => navigate("/contact")}
        className="px-8 py-3 rounded-full border border-purple-600 hover:bg-purple-600/10 transition-colors">
          Contact Me
        </button>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="mt-16 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-8 text-gradient">
          Tech Stack
        </h3>
        <motion.div
          className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
          whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.1)" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-50 pointer-events-none" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 relative">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
              >
                <tech.icon
                  className={`w-8 h-8 transition-all duration-300 ${
                    hoveredTech === null || hoveredTech === tech.name
                      ? "text-purple-400 scale-110"
                      : "text-gray-500 scale-90 opacity-50"
                  }`}
                />
                <span
                  className={`text-sm transition-all duration-300 ${
                    hoveredTech === null || hoveredTech === tech.name
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
