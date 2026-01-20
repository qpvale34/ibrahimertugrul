"use client";
import { useState } from "react";
import { iconMap, categoryColorMap, getStatusBg } from "./experienceConstants";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceMetaInfo from "./ExperienceMetaInfo";
import ExperienceTechnologies from "./ExperienceTechnologies";
import { MobileToggleButton, DesktopToggleButton } from "./ExperienceToggleButtons";
import ExperienceAchievements from "./ExperienceAchievements";
import CertificateButtons from "./CertificateButtons";

export default function ExperienceItem({ item, translations, isVisible, index, language }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const Icon = typeof item.icon === 'string' ? iconMap[item.icon] : item.icon;
  const showExpandButton = item.achievements && item.achievements.length > 0;

  const iconBgColor = categoryColorMap[item.category] || "from-green-900 to-green-400";
  const statusBadgeClass = getStatusBg(item.status);

  return (
    <div
      className={`relative pl-8 sm:pl-12 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="nm-flat transition-all duration-300 overflow-visible">
        <div className="p-5 sm:p-6">
          <ExperienceHeader
            item={item}
            Icon={Icon}
            iconBgColor={iconBgColor}
            statusTexts={translations.status}
            statusBadgeClass={statusBadgeClass}
          />

          <ExperienceMetaInfo item={item} isMobileExpanded={isMobileExpanded} />

          <p
            className={`text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] tracking-tight sm:tracking-normal mb-5 ${!isMobileExpanded ? "hidden sm:block" : ""
              }`}
          >
            {item.description}
          </p>

          <ExperienceTechnologies
            technologies={item.technologies}
            isMobileExpanded={isMobileExpanded}
            language={language}
          />

          {item.displayOrder === 7 && <CertificateButtons language={language} isMobile={false} />}

          <MobileToggleButton
            isExpanded={isMobileExpanded}
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            translations={translations}
          />

          <DesktopToggleButton
            isExpanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
            translations={translations}
            showExpandButton={showExpandButton}
          />

          {item.displayOrder === 7 && isMobileExpanded && (
            <CertificateButtons language={language} isMobile={true} />
          )}
        </div>
      </div>

      <ExperienceAchievements
        item={item}
        translations={translations}
        isExpanded={isExpanded}
        isMobileExpanded={isMobileExpanded}
        language={language}
      />
    </div>
  );
}
