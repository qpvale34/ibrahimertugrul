import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function ProjectToggleButton({ isExpanded, onClick, buttonTexts }) {
 return (
  <button
   onClick={onClick}
   className="flex items-center space-x-1.5 xs:space-x-2 text-[var(--bg-accent)] hover:text-[var(--text-primary)] transition-all duration-200 group hover:scale-105"
   aria-expanded={isExpanded}
   aria-label={isExpanded ? buttonTexts.showLess : buttonTexts.showDetails}
  >
   {isExpanded ? (
    <FaChevronDown className="w-3 xs:w-4 h-3 xs:h-4 group-hover:translate-y-1 transition-transform duration-200 text-[var(--bg-accent)]" />
   ) : (
    <FaChevronRight className="w-3 xs:w-4 h-3 xs:h-4 group-hover:translate-x-1 transition-transform duration-200" />
   )}
   <span className="font-medium text-xs xs:text-sm">
    {isExpanded ? buttonTexts.showLess : buttonTexts.showDetails}
   </span>
  </button>
 );
}
