import skillsData from '../src/data/skills.json';
import projectsData from '../src/data/projects.json';
import experienceData from '../src/data/experience.json';
import translationsData from '../src/data/translations.json';

export const getSkills = async () => {
    // Transform skills data to match the expected format in DataContext (grouped by category)
    const groupedSkills = skillsData.reduce((acc, skill) => {
        skill.categories.forEach((category) => {
            if (!acc[category]) {
                acc[category] = {
                    skills: [],
                };
            }
            acc[category].skills.push({
                name: skill.name,
                icon: skill.icon,
                experience: skill.experience.toString(),
                color: skill.color,
            });
        });
        return acc;
    }, {});
    return groupedSkills;
};

export const getProjects = async () => {
    return projectsData;
};

export const getExperience = async () => {
    return experienceData;
};

export const getTranslations = async (langProp) => {
    const lang = langProp.toUpperCase();
    const translations = {};

    // Simulate database join logic for translations
    translationsData.forEach((item) => {
        const text = item.translations[lang];
        if (text) {
            const keys = item.keyPath.split(".");
            let current = translations;

            keys.forEach((key, index) => {
                if (index === keys.length - 1) {
                    current[key] = text;
                } else {
                    if (typeof current[key] !== "object" || current[key] === null) {
                        current[key] = {};
                    }
                    current = current[key];
                }
            });
        }
    });

    return translations;
};
