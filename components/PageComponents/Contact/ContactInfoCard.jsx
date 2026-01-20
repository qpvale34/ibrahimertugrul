import Link from "next/link";
import { FaEnvelope, FaInstagram, FaSchool, FaExternalLinkAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactInfoCard({ language, isVisible }) {
  const title = language === "EN" ? "Contact Information" : "İletişim Bilgileri";

  const contactInfo = [
    {
      icon: FaSchool,
      label: language === "EN" ? "School:" : "Okul:",
      value: (
        <div className="flex items-center gap-2 flex-wrap">
          <span>Dudullu Anadolu İmam Hatip Lisesi</span>
          <Link
            href="https://www.instagram.com/dudulluaihl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-7 h-7 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full text-white hover:scale-110 transition-transform"
            title="Okul Instagram Sayfası"
          >
            <FaInstagram className="w-4 h-4" />
          </Link>
        </div>
      ),
    },
    {
      icon: FaInstagram,
      label: "Instagram:",
      value: (
        <Link
          href="https://www.instagram.com/eibruhim"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[var(--text-accent)] transition-colors"
        >
          <span>@eibruhim</span>
          <FaExternalLinkAlt className="w-3 h-3 opacity-70" />
        </Link>
      ),
    },
    {
      icon: FaEnvelope,
      label: language === "EN" ? "Email:" : "E-posta:",
      value: "muderrisibrahim@gmail.com",
      action: (
        <Link
          href="mailto:muderrisibrahim@gmail.com"
          className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
          title="E-posta Gönder"
        >
          <MdEmail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </Link>
      )
    },
  ];

  return (
    <div
      className={`space-y-4 sm:space-y-8 transition-all duration-500 overflow-visible ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
    >
      <div className="nm-flat p-6 sm:p-8 m-2 rounded-t-2xl sm:rounded-t-4xl overflow-visible">
        <h3 className="text-[20px] sm:text-2xl font-bold mb-6 flex items-center space-x-2">
          <FaEnvelope className="w-5 h-5 mr-4" />
          <span>{title}</span>
        </h3>

        <div className="space-y-5">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="mt-5 flex items-start space-x-4 p-1 sm:p-3 rounded-lg hover:nm-inset transition-colors duration-300"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 nm-convex rounded-full flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5 text-[var(--text-primary)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[15px] block opacity-80 mb-1">{info.label}</span>
                  <div className="font-medium text-[16px] wrap-break-words flex items-center gap-2">
                    {info.value}
                    {info.action && info.action}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

