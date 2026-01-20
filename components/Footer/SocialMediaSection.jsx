import Link from "next/link";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const socialLinksConfig = [
 {
  name: "Linkedin",
  href: 'https://www.linkedin.com/in/ibrahim-ertugrul/',
  icon: FaLinkedin,
 },
 {
  name: "Github",
  href: 'https://github.com/ibrahimertugrul',
  icon: FaGithub,
 },
 {
  name: "CV",
  href: '/pdf/cv.pdf',
  icon: FaFileDownload,
 },
];

export default function SocialMediaSection({ language }) {
 return (
  <div className="space-y-4">
   <h3 className="text-accent font-semibold text-lg border-b border-[var(--text-tertiary)]/40 pb-2">
    {language === 'TR' ? 'Sosyal Medya' : 'Social Media'}
   </h3>
   <div className="space-y-3">
    {socialLinksConfig.map((link) => {
     const IconComponent = link.icon;
     return (
      <Link
       key={link.name}
       href={link.href}
       target="_blank"
       rel="noopener noreferrer"
       className={`flex items-center space-x-3 text-accent transition-all duration-300 text-sm group cursor-pointer hover:cursor-pointer hover:scale-105`}
      >
       <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
       <span className="group-hover:translate-x-1 transition-transform duration-300">
        {link.name}
       </span>
      </Link>
     );
    })}
   </div>
  </div>
 );
}

