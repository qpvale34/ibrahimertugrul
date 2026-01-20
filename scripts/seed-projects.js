import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const projectsData = [
    {
        category: "web",
        titleTr: "Vibe-Check Portfolio",
        titleEn: "Vibe-Check Portfolio",
        descriptionTr: "",
        descriptionEn: "",
        status: "completed",
        technologies: ["SiNextdotjs", "FaReact", "SiTailwindcss", "SiMongodb", "SiPrisma"],
        featuresTr: ["Dinamik içerik yönetimi", "Neumorphic tasarım", "Çoklu dil desteği", "Vibe-based animasyonlar"],
        featuresEn: ["Dynamic content management", "Neumorphic design", "Multi-language support", "Vibe-based animations"],
        liveUrl: "https://github.com/qpvale34",
        githubUrl: "https://github.com/qpvale34",
        teamTr: "Bireysel",
        teamEn: "Individual",
        roleTr: "Vibe Coding",
        roleEn: "Vibe Coding",
        displayOrder: 1,
    },
    {
        category: "Teknofest / Tübitak",
        titleTr: "",
        titleEn: "",
        descriptionTr: "",
        descriptionEn: "",
        status: "in-progress",
        technologies: ["FaPython", "SiDjango", "SiMysql", "SiSqlite"],
        featuresTr: [""],
        featuresEn: [""],
        githubUrl: "https://github.com/qpvale34",
        teamTr: "Bireysel",
        teamEn: "Individual",
        roleTr: "Backend Developer",
        roleEn: "Backend Developer",
        displayOrder: 2,
    }
];

async function seedProjects() {
    await prisma.project.deleteMany({});
    for (const data of projectsData) {
        try {
            await prisma.project.create({ data: data });
        } catch (error) { }
    }
}

async function main() {
    try {
        await seedProjects();
    } catch (e) {
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}
main();
