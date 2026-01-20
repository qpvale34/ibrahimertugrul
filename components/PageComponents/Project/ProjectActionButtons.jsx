import Link from "next/link";
import { FaEye, FaGithub, FaExternalLinkAlt, FaImage, FaCertificate, FaAward } from "react-icons/fa";

export default function ProjectActionButtons({
 project,
 electronicsImageUrl,
 buttonTexts,
 isMobile = false,
}) {
 const baseClasses = "flex flex-wrap gap-2 xs:gap-3";
 const displayClasses = isMobile ? "" : "hidden sm:flex sm:gap-4 mb-3 xs:mb-4";

 const certificateUrl = project.id === 7 ? "/images/UstunBasari.png" : null;
 const achievementUrl = project.id === 7 ? "/images/Sertifika.png" : null;

 return (
  <div className={`${baseClasses} ${displayClasses}`}>
{certificateUrl && (
     <Link
      href={certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 nm-button nm-flat border border-transparent hover:border-[var(--bg-accent)] bg-[var(--bg-secondary)] text-primary text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl hover:scale-105"
     >
     <FaCertificate className="w-4 h-4 mr-2 text-[var(--bg-accent)]" />
     {buttonTexts.certificate || "Sertifika"}
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-[var(--bg-accent)]" />
    </Link>
   )}

{achievementUrl && (
     <Link
      href={achievementUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 nm-button nm-flat border border-transparent hover:border-[var(--bg-accent)] bg-[var(--bg-secondary)] text-primary text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl hover:scale-105"
     >
     <FaAward className="w-4 h-4 mr-2 text-[var(--bg-accent)]" />
     {buttonTexts.achievement || "Başarı Belgesi"}
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-[var(--bg-accent)]" />
    </Link>
   )}

{project.liveUrl && !certificateUrl && (
     <Link
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 nm-button nm-flat border border-transparent hover:border-[var(--bg-accent)] bg-[var(--bg-secondary)] text-primary text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl hover:scale-105"
     >
     <FaEye className="w-4 h-4 mr-2 text-[var(--bg-accent)]" />
     Demo
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-[var(--bg-accent)]" />
    </Link>
   )}

{!project.liveUrl && !certificateUrl && electronicsImageUrl && (
     <Link
      href={electronicsImageUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 nm-button nm-flat border border-transparent hover:border-[var(--bg-accent)] bg-[var(--bg-secondary)] text-primary text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl hover:scale-105"
     >
     <FaImage className="w-4 h-4 mr-2 text-[var(--bg-accent)]" />
     Demo
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-[var(--bg-accent)]" />
    </Link>
   )}

{project.githubUrl && (
     <Link
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 nm-button nm-flat border border-transparent hover:border-[var(--bg-accent)] bg-[var(--bg-secondary)] text-primary text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl hover:scale-105"
     >
     <FaGithub className="w-4 h-4 mr-2 text-[var(--bg-accent)]" />
     {buttonTexts.sourceCode}
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-[var(--bg-accent)]" />
    </Link>
   )}
  </div>
 );
}
