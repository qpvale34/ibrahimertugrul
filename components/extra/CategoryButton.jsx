"use client";

export default function CategoryButton({
 categoryKey,
 title,
 count,
 countLabel,
 icon: Icon,
 color,
 isActive,
 onClick,
 className = "",
}) {
 return (
  <button
   onClick={() => onClick(categoryKey)}
className={`nm-button group relative px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4  transition-all duration-300 ${isActive
     ? `nm-inset text-[var(--text-tertiary)] scale-105`
     : "nm-flat text-primary hover:scale-105"
     } ${className}`}
  >
   <div className="flex items-center space-x-2 xs:space-x-3">
    {Icon && <Icon className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 group-hover:scale-110 transition-transform duration-200" />}
    <div className="text-left">
     <div className="font-semibold text-sm sm:text-base lg:text-lg">
      {title}
     </div>
     <div className="text-[14px] sm:text-sm opacity-80">
      {count} {countLabel}
     </div>
    </div>
   </div>
   {isActive && (
    <div className="absolute -bottom-1 xs:-bottom-2 left-1/2 transform -translate-x-1/2 w-6 xs:w-8 h-0.5 xs:h-1 var(--text-tertiary) rounded-full"></div>
   )}
  </button>
 );
}
