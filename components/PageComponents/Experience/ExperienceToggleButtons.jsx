import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export function MobileToggleButton({ isExpanded, onClick, translations }) {
 return (
  <button
   onClick={onClick}
   className="flex items-center space-x-2 text-[var(--bg-accent)] hover:text-[var(--text-tertiary)] transition-all duration-200 sm:hidden group hover:scale-105"
   aria-expanded={isExpanded}
   aria-label={isExpanded ? translations.showLess : translations.showMore}
  >
   {isExpanded ? (
    <>
     <FaChevronDown className="w-3 h-3 group-hover:translate-y-1 transition-transform duration-200" />
     <span className="text-[15px] font-medium">{translations.showLess}</span>
    </>
   ) : (
    <>
     <FaChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
     <span className="text-[15px] font-medium">{translations.showMore}</span>
    </>
   )}
  </button>
 );
}

export function DesktopToggleButton({ isExpanded, onClick, translations, showExpandButton }) {
 if (!showExpandButton) return null;

 return (
  <button
   onClick={onClick}
   className="hidden sm:flex items-center space-x-2 text-[var(--bg-accent)] hover:text-[var(--text-tertiary)] transition-all duration-200 group hover:scale-105"
   aria-expanded={isExpanded}
   aria-label={isExpanded ? translations.showLess : translations.showMore}
  >
   {isExpanded ? (
    <>
     <FaChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
     <span className="text-[15px] font-medium">{translations.showLess}</span>
    </>
   ) : (
    <>
     <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
     <span className="text-[15px] font-medium">{translations.showMore}</span>
    </>
   )}
  </button>
 );
}
