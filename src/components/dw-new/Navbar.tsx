"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-[60]">
        <div className="flex items-center justify-between px-6 py-5 md:px-12 relative z-10">
          {/* Left: Logo - Placeholder */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-32 bg-black bg-opacity-10 rounded text-amber-900 flex items-center justify-center text-xs font-bold">
              LOGO
            </div>
          </a>
          {/* Center: Nav Links - Placeholder */}
          <div className="hidden md:flex items-center gap-8">
            <div className="h-6 w-16 bg-black bg-opacity-10 rounded text-amber-900 flex items-center justify-center text-xs">
              HOME
            </div>
            <div className="h-6 w-16 bg-black bg-opacity-10 rounded text-amber-900 flex items-center justify-center text-xs">
              MENU
            </div>
            <div className="h-6 w-16 bg-black bg-opacity-10 rounded text-amber-900 flex items-center justify-center text-xs">
              ABOUT
            </div>
            <div className="h-6 w-20 bg-black bg-opacity-10 rounded text-amber-900 flex items-center justify-center text-xs">
              CONTACT
            </div>
            <div className="h-6 w-24 bg-black bg-opacity-10 rounded text-amber-900 flex items-center justify-center text-xs">
              SERVICES
            </div>
          </div>

          {/* Right: CTA Button - Placeholder */}
          <div className="hidden md:block">
            <div className="h-10 w-32 bg-black bg-opacity-10 rounded-full text-amber-900 flex items-center justify-center text-sm font-bold">
              ORDER NOW
            </div>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 focus:outline-none relative z-10"
            aria-label="Open menu"
          >
            <span className="w-6 h-[2.5px] bg-black rounded-sm" />
            <span className="w-6 h-[2.5px] bg-black rounded-sm" />
            <span className="w-6 h-[2.5px] bg-black rounded-sm" />
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#067E85] flex flex-col"
          >
            {/* Close Button */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex justify-end p-6 md:p-8"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-12 h-12 text-[#F7F3EA] focus:outline-none hover:scale-110 transition-transform"
                aria-label="Close menu"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8L24 24M24 8L8 24"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="h-16 w-48 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors cursor-pointer"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
