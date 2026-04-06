import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = ["HOME", "PROJECTS", "TIMELINE", "CONTACT"];

  return (
    <>
      {/* Header bar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white">
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white z-[60] relative"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay — rendered as a portal-like sibling outside header */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        aria-hidden={!isOpen}
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-white text-lg uppercase tracking-widest hover:text-gray-400 transition-colors duration-200"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </>
  );
}