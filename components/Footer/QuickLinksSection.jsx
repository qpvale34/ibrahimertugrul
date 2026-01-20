import Link from "next/link";
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const pageIconMap = {
        "/": FaHome,
        "/about": FaUser,
        "/experience": FaBriefcase,
        "/projects": FaProjectDiagram,
        "/contact": FaEnvelope,
};

export default function QuickLinksSection({ language }) {
        const getQuickLinks = (languageCode) => [
                { name: languageCode === "TR" ? "Ana Sayfa" : "Home", href: '/' },
                { name: languageCode === "TR" ? "Hakkımda" : "About", href: '/about' },
                { name: languageCode === "TR" ? "Deneyimler" : "Experiences", href: '/experience' },
                { name: languageCode === "TR" ? "Projeler" : "Projects", href: '/projects' },
                { name: languageCode === "TR" ? "İletişim" : "Contact", href: '/contact' },
        ];

        const quickLinks = getQuickLinks(language);

        return (
                <div className="space-y-4">
                        <h3 className="text-accent font-semibold text-lg border-b border-[var(--bg-accent)]/40 pb-2">
                                {language === "TR" ? "Hızlı Bağlantılar" : "Quick Links"}
                        </h3>
                        <ul className="space-y-2">
                                {quickLinks.map((link) => {
                                        const IconComponent = pageIconMap[link.href];
                                        return (
                                                <li key={link.name}>
                                                        <Link
                                                                href={link.href}
                                                                className="text-accent transition-all duration-300 text-sm flex items-center group cursor-pointer hover:scale-105"
                                                        >
                                                                <span className="text-accent w-0 group-hover:w-2 h-0.5 bg-[var(--bg-accent)] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                                                {IconComponent && (
                                                                        <IconComponent className="w-4 h-4 mr-2 text-accent group-hover:text-[var(--bg-accent)] group-hover:scale-110 transition-all duration-300" />
                                                                )}
                                                                {link.name}
                                                        </Link>
                                                </li>
                                        );
                                })}
                        </ul>
                </div>
        );
}

