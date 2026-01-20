"use client";
import { useState, useEffect } from "react";
import { FaGraduationCap, FaMicrochip, FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";
import CategoryTabs from "../../../components/PageComponents/Experience/CategoryTabs";
import ExperienceItem from "../../../components/PageComponents/Experience/ExperienceItem";
import "../../styles/experience.css";


export default function ExperiencePage() {
  const { language, loading: langLoading } = useLanguage();
  const { experience = {}, loading: dataLoading } = useData();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Teknofest - Tübitak");

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const categoryIcons = {
    "Teknofest - Tübitak": FaGraduationCap,
    "Gömülü Sistemler": FaMicrochip,
  };

  const categoryColors = {
    "Teknofest - Tübitak": "bg-green-700",
    "Gömülü Sistemler": "bg-green-700",
  };

  const experienceData = (Array.isArray(experience) ? experience : []).reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) {
      acc[key] = {
        items: [],
        icon: categoryIcons[key] || FaBriefcase,
        color: categoryColors[key] || "bg-green-700"
      };
    }
    acc[key].items.push(item);
    return acc;
  }, {});

  const pageTranslations = {
    title: language === "EN" ? "Experiences" : "Deneyimler",
    subtitle: language === "EN" ? "My experiences" : "Deneyimlerim",
    description: language === "EN"
      ? "My experiences"
      : "Deneyimlerim",
  };

  const categoryTranslations = {
    "Teknofest - Tübitak": {
      title: "Teknofest - Tübitak",
      description: language === "EN"
        ? "Consultancy and Mentorship in competitions"
        : "Yarışmalarda Danışmanlık ve Mentörlük",
    },
    "Gömülü Sistemler": {
      title: language === "EN" ? "Embedded Systems" : "Gömülü Sistemler",
      description: language === "EN"
        ? "Consultancy and Mentorship in embedded projects"
        : "Gömülü sistem projelerinde Danışmanlık ve Mentörlük",
    },
  };

  const statusTranslations = {
    completed: language === "EN" ? "Completed" : "Tamamlandı",
    current: language === "EN" ? "Ongoing" : "Devam Ediyor",
    upcoming: language === "EN" ? "Upcoming" : "Yakında",
  };

  const otherTranslations = {
    duration: language === "EN" ? "Duration" : "Süre",
    location: language === "EN" ? "Location" : "Konum",
    gpa: language === "EN" ? "GPA" : "Not Ortalaması",
    technologies: language === "EN" ? "Technologies" : "Teknolojiler",
    achievements: language === "EN" ? "Achievements" : "Başarılar",
    details: language === "EN" ? "Details" : "Detaylar",
    showMore: language === "EN" ? "Show More" : "Daha Fazla",
    showLess: language === "EN" ? "Show Less" : "Daha Az",
  };

  const translations = {
    ...pageTranslations,
    categories: categoryTranslations,
    status: statusTranslations,
    ...otherTranslations,
  };

  const getCategoryStats = (category) => {
    const items = experienceData[category]?.items || [];
    const completed = items.filter((item) => item.status === "completed").length;
    const current = items.filter((item) => item.status === "current").length;
    return { total: items.length, completed, current };
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="exp" className="relative mt-5 sm:mt-10 md:mt-20 min-h-screen">
      <div className="block sm:hidden h-1" />
      <div className="min-h-screen relative overflow-hidden text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <CategoryTabs
            experienceData={experienceData}
            translations={translations}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            getCategoryStats={getCategoryStats}
            isVisible={isVisible}
            language={language}
          />

          <div
            className={`nm-flat p-8 m-2 transition-all duration-500 delay-100 overflow-visible ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-bold mb-2">
                {translations.categories[activeCategory]?.title || activeCategory}
              </h3>
              <p className="text-base px-2">
                {translations.categories[activeCategory]?.description || ''}
              </p>
            </div>

            <div className="space-y-6">
              {(experienceData[activeCategory]?.items || []).map((item, index) => (
                <ExperienceItem
                  key={item.id}
                  item={item}
                  translations={translations}
                  isVisible={isVisible}
                  index={index}
                  language={language}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

