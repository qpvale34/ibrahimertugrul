import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const experienceData = [
    {
        category: "education",
        titleTr: "Lisans Eğitimi",
        titleEn: "Bachelor's Degree",
        institutionTr: "Gazi Üniversitesi - Gazi Eğitim Fakültesi",
        institutionEn: "Gazi University - Faculty of Education",
        period: "Devam",
        status: "current",
        location: "istanbul, Türkiye",
        gpa: null,
        descriptionTr: ".",
        descriptionEn: ".",
        technologies: ["FaLanguage", "FaBook", "FaUniversity"],
        achievementsTr: [""],
        achievementsEn: [""],
        icon: "FaGraduationCap",
        displayOrder: 1,
    },
    {
        category: "internship",
        titleTr: "Full Stack Developer",
        titleEn: "Full Stack Developer",
        institutionTr: "Freelance",
        institutionEn: "Freelance",
        period: "Devam",
        status: "current",
        location: "Remote",
        gpa: null,
        descriptionTr: "modern web uygulamaları. Vibe Coding ",
        descriptionEn: " modern web applications  Vibe Coding .",
        technologies: ["FaPython", "SiDjango", "SiFlask", "SiNextdotjs", "FaReact"],
        achievementsTr: ["RESTful API mimarileri", "Websocket tabanlı projeler", "MySQL ve MongoDB veritabanı yönetimi"],
        achievementsEn: ["RESTful API architectures", "Websocket-based projects", "MySQL and MongoDB database management"],
        icon: "FaTerminal",
        displayOrder: 2,
    }
];

async function seedExperience() {
    await prisma.experience.deleteMany({});
    for (const data of experienceData) {
        try {
            await prisma.experience.create({ data: data });
        } catch (error) { }
    }
}

async function main() {
    try {
        await seedExperience();
    } catch (e) {
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}
main();
