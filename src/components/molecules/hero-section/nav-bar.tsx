function Navbar() {
  return (
    <nav className="bg-transparent text-black font-normal h-[110px] flex items-center  top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {/* Center Section: Links */}
          <div className="hidden md:flex space-x-20">
            <a href="#about" className="hover:text-gray-500 transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-gray-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-gray-500 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-gray-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
