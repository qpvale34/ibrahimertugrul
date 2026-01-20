export function MobileMenuButton({ isMenuOpen, toggleMenu, t }) {
 return (
   <button
    onClick={toggleMenu}
    type="button"
    className="lg:hidden inline-flex items-center justify-center p-1.5 text-primary rounded-lg nm-button nm-flat-sm focus:outline-none transition-all duration-300 hover:scale-105"
    aria-controls="mobile-menu"
    aria-expanded={isMenuOpen}
   >
   <span className="sr-only">{t.openMenu}</span>
   <div className="relative w-5 h-5">
    <span
     className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 top-2.5" : "top-1"
      }`}
    />
    <span
     className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-2.5 ${isMenuOpen ? "opacity-0" : "opacity-100"
      }`}
    />
    <span
     className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-2.5" : "top-4"
      }`}
    />
   </div>
  </button>
 );
}
