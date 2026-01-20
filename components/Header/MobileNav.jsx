"use client";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../app/context/ThemeContext";

export function MobileNav({
  isMenuOpen,
  navigationItems,
  activeSection,
  handleNavigationClick,
  language,
  languagesConfig,
  handleLanguageChange,
  socialLinks,
  t,
}) {
  const { isLight, toggleTheme } = useTheme();

  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out p-4 ${isMenuOpen ? "max-h-[850px] opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
    >
      <div className="nm-flat rounded-xl p-4 space-y-1 md:space-y-2">
        {navigationItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.key;

          return (
            <Link
              key={item.key}
              href={item.href}
              onClick={handleNavigationClick}
              className={`flex items-center space-x-4 sm:space-x-5 py-2 md:py-3 px-3 rounded-lg text-[15px] md:text-[18px] font-medium transition-all duration-300 ${isActive
                ? "text-[var(--text-tertiary)] nm-inset"
                : "text-primary nm-flat hover:text-[var(--text-tertiary)] hover:scale-105"
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <IconComponent className="w-4 h-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-200" />
              <span>{item.name}</span>
            </Link>
          );
        })}

        <div className="py-3 my-0 border-t border-[var(--bg-accent)]/30">
          <div className="flex justify-center space-x-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center px-3 py-2 rounded-lg nm-button nm-flat text-[var(--bg-accent)] transition-all duration-300 group hover:scale-105"
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            >
              {isLight ? (
                <FaMoon className="w-5 h-5 text-[var(--bg-accent)]" />
              ) : (
                <FaSun className="w-5 h-5 text-[var(--bg-accent)]" />
              )}
            </button>

            {languagesConfig.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${language === lang.code
                  ? "text-[var(--text-primary)] nm-inset text-[var(--bg-accent)] font-bold"
                  : "nm-flat text-primary hover:text-[var(--bg-accent)] hover:scale-105"
                  }`}
              >
                <div className="flex items-center">
                  <ReactCountryFlag
                    countryCode={lang.countryCode}
                    svg
                    style={{ width: "20px", height: "16px" }}
                    title={lang.name}
                  />
                </div>
                <span className="text-xs">{lang.code}</span>
              </button>))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[var(--bg-accent)]/30">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 px-3 py-2.5 text-primary nm-button nm-flat text-primary hover:text-[var(--bg-accent)] hover:scale-105"
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-primary)]" />
                {link.name === t.cv && (
                  <span className="truncate text-[var(--text-primary)] font-semibold">{link.name}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
