"use client";
import Link from "next/link";
import { FaGamepad, FaExternalLinkAlt } from "react-icons/fa";

export default function ActionButtons({ language }) {

  const projectsTitle = language === "EN" ? "Projects" : "Projeler";

  return (
   <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center">
    <Link
     href="/projects"
     className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-3 lg:py-4 nm-button nm-flat border-transparent text-primary font-medium transition-all duration-300 hover:scale-105 text-[15px] lg:text-base w-full sm:w-auto min-w-[200px]"
    >
     <FaGamepad className="w-4 h-4 lg:w-5 lg:h-5" />
      <span>{projectsTitle}</span>
    </Link>

    <Link
     href="https://qpvale34.github.io/arapcazamirler/"
     target="_blank"
     rel="noopener noreferrer"
     className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-3 lg:py-4 nm-button nm-flat border-transparent text-primary font-medium transition-all duration-300 hover:scale-105 text-[15px] lg:text-base w-full sm:w-auto min-w-[200px]"
    >
     <FaExternalLinkAlt className="w-4 h-4 lg:w-5 lg:h-5" />
     <span>Arapça Zamirler</span>
    </Link>

    <Link
     href="https://qpvale34.github.io/arabic-hunt-3d/"
     target="_blank"
     rel="noopener noreferrer"
     className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-3 lg:py-4 nm-button nm-flat border-transparent text-primary font-medium transition-all duration-300 hover:scale-105 text-[15px] lg:text-base w-full sm:w-auto min-w-[200px]"
    >
     <FaExternalLinkAlt className="w-4 h-4 lg:w-5 lg:h-5" />
     <span>Arabic Hunt 3D</span>
    </Link>
   </div>
  );
}
