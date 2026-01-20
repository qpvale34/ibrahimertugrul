"use client";
import { useState, useRef, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { FaChevronUp } from "react-icons/fa";

export default function LanguageSelector({ currentLang, onLanguageChange, languages }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Ensure languages is an array
  const languagesList = Array.isArray(languages) ? languages : [];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-[var(--text-primary)] hover:bg-[var(--bg-info)]/20 rounded-lg nm-button nm-flat transition-all duration-300 focus:outline-none border border-[var(--bg-accent)]/30 text-sm cursor-pointer hover:cursor-pointer"
      >
        <div className="flex items-center space-x-2">
          <ReactCountryFlag
            countryCode={currentLang === 'TR' ? 'TR' : 'GB'}
            svg
            style={{
              width: '1em',
              height: '1em',
            }}
            title={currentLang === 'TR' ? 'Türkçe' : 'English'}
          />
          <span className="font-medium">{currentLang === 'TR' ? 'TR' : 'EN'}</span>
        </div>
        <FaChevronUp className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 py-2 w-32 bg-[var(--bg-secondary)] nm-flat rounded-lg shadow-xl border border-[var(--bg-accent)]/30 z-50">
          {languagesList.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-all duration-300 text-left cursor-pointer hover:cursor-pointer ${currentLang === lang.code
                ? "text-[var(--bg-accent)] bg-[var(--bg-info)]/20"
                : "text-[var(--text-secondary)] hover:text-[var(--bg-accent)] hover:bg-[var(--bg-info)]/10"
                }`}
            >
              <div className="flex items-center">
                <ReactCountryFlag
                  countryCode={lang.countryCode || (lang.code === 'TR' ? 'TR' : 'GB')}
                  svg
                  style={{
                    width: "20px",
                    height: "16px",
                  }}
                  title={lang.name}
                />
              </div>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
