"use client";
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { getSkills, getExperience, getProjects, getTranslations } from "../../lib/data-service";
import { useLanguage } from "./LanguageContext";

const DataContext = createContext();

const dataCache = {
    skills: null,
    experience: {},
    projects: {},
    translations: {}
};

export function DataProvider({ children }) {
    const { language } = useLanguage();
    const [skills, setSkills] = useState(dataCache.skills);
    const [experience, setExperience] = useState(dataCache.experience[language] || null);
    const [projects, setProjects] = useState(dataCache.projects[language] || null);
    const [loading, setLoading] = useState(!dataCache.skills || !dataCache.experience[language] || !dataCache.projects[language]);
    const [error, setError] = useState(null);

    const fetchAllData = useCallback(async () => {
        const hasData = dataCache.skills && dataCache.experience[language] && dataCache.projects[language];
        if (!hasData) setLoading(true);
        setError(null);

        try {
            // Fetch skills
            if (!dataCache.skills) {
                dataCache.skills = await getSkills();
            }
            setSkills(dataCache.skills);

            // Fetch language-dependent data
            if (!dataCache.experience[language] || !dataCache.projects[language] || !dataCache.translations[language]) {
                const [fetchedExperience, fetchedProjects, fetchedTranslations] = await Promise.all([
                    getExperience(language),
                    getProjects(language),
                    getTranslations(language)
                ]);

                dataCache.experience[language] = fetchedExperience;
                dataCache.projects[language] = fetchedProjects;
                dataCache.translations[language] = fetchedTranslations;
            }

            setExperience(dataCache.experience[language]);
            setProjects(dataCache.projects[language]);

            // Translations are managed by LanguageContext primarily, but if cached here, it's fine.

        } catch (err) {
            console.error("Data loading error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [language]);

    useEffect(() => {
        fetchAllData();
    }, [fetchAllData]);

    const contextValue = useMemo(() => ({
        skills,
        experience,
        projects,
        loading,
        error,
        refetch: fetchAllData,
    }), [skills, experience, projects, loading, error, fetchAllData]);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}