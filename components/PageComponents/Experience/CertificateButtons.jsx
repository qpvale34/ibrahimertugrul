import Link from "next/link";
import { FaCertificate, FaAward, FaExternalLinkAlt } from "react-icons/fa";

export default function CertificateButtons({ language, isMobile = false }) {
  const certificateText = language === "EN" ? "Certificate" : "Sertifika";
  const achievementText = language === "EN" ? "Achievement Certificate" : "Başarı Belgesi";

  const buttonBaseClass = "inline-flex items-center px-4 py-2 nm-button nm-flat border border-transparent hover:border-[var(--bg-accent)] bg-[var(--bg-secondary)] text-primary text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl hover:scale-105";

  const displayClasses = isMobile ? "flex flex-wrap gap-2 sm:gap-3" : "flex flex-wrap gap-2 xs:gap-3 mb-3 xs:mb-4";

  const buttons = [
    {
      href: "/images/Sertifika.png",
      icon: FaCertificate,
      text: certificateText,
    },
    {
      href: "/images/UstunBasari.png",
      icon: FaAward,
      text: achievementText,
    },
  ];

  return (
    <div className={displayClasses}>
      {buttons.map((button, index) => {
        const IconComponent = button.icon;
        return (
          <Link
            key={index}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonBaseClass}
          >
            <IconComponent className="w-4 h-4 mr-2 text-[var(--bg-accent)] group-hover:scale-110 transition-transform duration-200" />
            {button.text}
            <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-[var(--bg-accent)]" />
          </Link>
        );
      })}
    </div>
  );
}
