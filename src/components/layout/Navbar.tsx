import { useState } from "react";

import { Menu, X, Tent } from "lucide-react";
import { Button } from "../ui/Button";

import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Packages", href: "#packages" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Tent className="w-8 h-8 text-blue-400 relative z-10" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-emerald-400">
              Campify
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <Button size="sm" className="hidden lg:flex">
              Book Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4">Book Journey</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
