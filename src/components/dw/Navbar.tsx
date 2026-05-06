"use client";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* Main Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 hero-pattern">
        <div className="flex items-center justify-between px-6 py-5 md:px-12">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2 font-display text-2xl font-extrabold text-dw-dark md:text-3xl">
            <span className="text-dw-orange">DILLI</span>
            <span className="text-dw-teal">WALE</span>
          </a>
          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-display font-bold text-dw-dark">
            <a href="#menu" className="hover:text-dw-orange transition-colors">Home</a>
            <a href="#story" className="hover:text-dw-orange transition-colors">About</a>
            <a href="#contact" className="hover:text-dw-orange transition-colors">Menus</a>
            <a href="#contact" className="hover:text-dw-orange transition-colors">Locations</a>
            <a href="#contact" className="hover:text-dw-orange transition-colors">What's On</a>
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:block">
            <button className="navbar-pill-btn">
              <div className="navbar-pill-l1">
                <div className="navbar-pill-l2">
                  <div className="navbar-pill-l3">Book a Table</div>
                </div>
              </div>
            </button>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 focus:outline-none"
            aria-label="Open menu"
          >
            <span className="w-6 h-[2.5px] bg-[#1A1A1A] rounded-sm" />
            <span className="w-6 h-[2.5px] bg-[#1A1A1A] rounded-sm" />
            <span className="w-6 h-[2.5px] bg-[#1A1A1A] rounded-sm" />
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#067E85] flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-6 md:p-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-12 h-12 text-[#F7F3EA] focus:outline-none"
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
          </div>

          {/* Nav Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            <a
              href="#menu"
              onClick={() => setIsMenuOpen(false)}
              className="font-display font-bold text-[3rem] text-[#F7F3EA] border-b-2 border-[#FFC300] pb-2 hover:opacity-80 transition-opacity"
            >
              Menu
            </a>
            <a
              href="#story"
              onClick={() => setIsMenuOpen(false)}
              className="font-display font-bold text-[3rem] text-[#F7F3EA] border-b-2 border-[#FFC300] pb-2 hover:opacity-80 transition-opacity"
            >
              Story
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-display font-bold text-[3rem] text-[#F7F3EA] border-b-2 border-[#FFC300] pb-2 hover:opacity-80 transition-opacity"
            >
              Find Us
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 font-display font-bold text-[3rem] text-[#F7F3EA] border-b-2 border-[#FFC300] pb-2 hover:opacity-80 transition-opacity"
            >
              Book a Table
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
