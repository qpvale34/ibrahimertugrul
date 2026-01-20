import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const skillsData = [
    { categories: ["backend"], name: "Python", experience: 4, icon: "FaPython", color: "text-blue-500", displayOrder: 1 },
    { categories: ["backend"], name: "Flask", experience: 3, icon: "SiFlask", color: "text-gray-400", displayOrder: 2 },
    { categories: ["backend"], name: "Django", experience: 3, icon: "SiDjango", color: "text-green-800", displayOrder: 3 },
    { categories: ["frontend", "backend"], name: "Next.js", experience: 4, icon: "SiNextdotjs", color: "text-black", displayOrder: 4 },
    { categories: ["frontend"], name: "React", experience: 4, icon: "FaReact", color: "text-cyan-400", displayOrder: 5 },
    { categories: ["frontend", "backend"], name: "JavaScript", experience: 4, icon: "FaJsSquare", color: "text-yellow-400", displayOrder: 6 },
    { categories: ["frontend", "backend"], name: "TypeScript", experience: 3, icon: "SiTypescript", color: "text-blue-600", displayOrder: 7 },
    { categories: ["backend"], name: "C++", experience: 3, icon: "SiCplusplus", color: "text-blue-700", displayOrder: 8 },
    { categories: ["backend"], name: "C#", experience: 3, icon: "SiCsharp", color: "text-purple-600", displayOrder: 9 },
    { categories: ["backend"], name: "REST API", experience: 4, icon: "FaPlug", color: "text-orange-500", displayOrder: 10 },
    { categories: ["backend"], name: "Websocket", experience: 3, icon: "FaNetworkWired", color: "text-cyan-500", displayOrder: 11 },
    { categories: ["database"], name: "SQLite", experience: 4, icon: "SiSqlite", color: "text-blue-400", displayOrder: 12 },
    { categories: ["database"], name: "MySQL", experience: 4, icon: "SiMysql", color: "text-blue-600", displayOrder: 13 },
    { categories: ["database"], name: "MongoDB", experience: 3, icon: "SiMongodb", color: "text-green-500", displayOrder: 14 },
    { categories: ["frontend"], name: "Tailwind", experience: 4, icon: "SiTailwindcss", color: "text-cyan-500", displayOrder: 15 },
    { categories: ["frontend"], name: "Bootstrap", experience: 4, icon: "FaBootstrap", color: "text-purple-600", displayOrder: 16 },
    { categories: ["frontend"], name: "CSS3", experience: 4, icon: "FaCss3Alt", color: "text-blue-500", displayOrder: 17 },
    { categories: ["frontend"], name: "HTML", experience: 4, icon: "FaHtml5", color: "text-orange-600", displayOrder: 18 },
    { categories: ["tools"], name: "GitHub", experience: 4, icon: "FaGithub", color: "text-gray-500", displayOrder: 19 },
];

async function seedSkills() {
    await prisma.skill.deleteMany({});
    for (const data of skillsData) {
        try {
            await prisma.skill.create({ data: data });
        } catch (error) { }
    }
}

async function main() {
    try {
        await seedSkills();
    } catch (e) {
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}
main();
