
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 shadow-lg p-4 ">
      <div className="container mx-auto flex justify-between items-center">
    
        <div className="text-white text-3xl font-extrabold tracking-wide  hover:text-gray-200 transition duration-300">
        FoodieNest
        </div>
     

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/about"
            className="text-white text-lg font-medium hover:text-gray-200 transition duration-300"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-white text-lg font-medium hover:text-gray-200 transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 bg-white rounded-lg shadow-md p-4"
        >
          <a
            href="/about"
            className="block text-gray-700 text-lg font-medium py-2 hover:text-indigo-600 transition duration-300"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="block text-gray-700 text-lg font-medium py-2 hover:text-indigo-600 transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      )}
    </nav>
  );
}
