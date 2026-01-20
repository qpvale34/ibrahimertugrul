"use client";
import { useState, useEffect, useMemo } from "react";
import { FaProjectDiagram, FaLayerGroup, FaGlobe, FaBolt, FaMicrochip } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";
import CategoryButton from "../../../components/extra/CategoryButton";
import ProjectCard from "../../../components/PageComponents/Project/ProjectCard";
import ProjectStats from "../../../components/PageComponents/Project/ProjectStats";


export default function ProjectsPage() {
  const { language, t, loading: langLoading } = useLanguage();
  const { projects: rawProjects, loading: dataLoading } = useData();
  const projects = rawProjects || [];
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Web"); // ✅ varsayılan olarak Web seçildi
  const [searchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ✅ Yeni kategoriler
  const categories = useMemo(() => {
    const categoryIcons = {
      Web: FaGlobe,
      "Gömülü Sistemler": FaMicrochip
    };

    const categoryColors = {
      Web: "text-[var(--bg-accent)]",
      "Gömülü Sistemler": "text-[var(--bg-accent)]"
    };

    return {
      Web: {
        icon: categoryIcons.Web,
        color: categoryColors.Web,
        title: language === "TR" ? "Web" : "Web",
      },
      "Gömülü Sistemler": {
        icon: categoryIcons["Gömülü Sistemler"],
        color: categoryColors["Gömülü Sistemler"],
        title: language === "TR" ? "Gömülü Sistemler" : "Embedded Systems",
      },
    };
  }, [language]);

  const stats = useMemo(() => {
    if (!projects) return { total: 0, completed: 0, current: 0 };

    const total = projects.length;
    const completed = projects.filter((p) => p.status === "completed").length;
    const current = projects.filter((p) => p.status === "current").length;
    return { total, completed, current };
  }, [projects]);

  useEffect(() => {
    if (!projects) return;

    let filtered = projects;

    // ✅ Artık sadece seçili kategoriye göre filtrele
    if (activeCategory) {
      filtered = filtered.filter(
        (project) => project.category === activeCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [activeCategory, searchTerm, projects]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };



  const translations = {
    status: {
      completed: t('projects.status.completed'),
      current: t('projects.status.current'),
      planned: t('projects.status.planned'),
    },
  };

  return (
    <section id="projects" className="relative mt-5 sm:mt-10 md:mt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <ProjectStats stats={stats} language={language} isVisible={isVisible} />

        {/* ✅ Artık "all" kategorisi burada görünmeyecek */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 sm:mb-12 transition-all duration-500 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >{Object.entries(categories).map(([key, data]) => {
          const count = projects.filter((p) => p.category === key).length;

          return (
            <CategoryButton
              key={key}
              categoryKey={key}
              title={data.title}
              count={count}
              countLabel={language === "TR" ? "proje" : "projects"}
              icon={data.icon}
              color={data.color}
              isActive={activeCategory === key}
              onClick={handleCategoryChange}
            />
          );
        })}
        </div>

        <div className={`transition-all duration-500 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">
                {language === "TR" ? "Proje bulunamadı" : "No projects found"}
              </h3>
              <p className="text-sm">
                {language === "TR"
                  ? "Arama kriterlerinizi değiştirmeyi deneyin"
                  : "Try changing your search criteria"}
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  translations={translations}
                  language={language}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


