import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-transparent text-black font-normal h-[110px] w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-center h-[110px]">
          <div className="hidden md:flex space-x-20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gray-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors absolute right-4"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" color="black" />
          </button>
        </div>

        <div
          className={`
            md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" color="black" />
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl hover:text-gray-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
