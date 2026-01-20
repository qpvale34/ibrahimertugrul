import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const languagesData = [
  { code: "TR", name: "Türkçe" },
  { code: "EN", name: "English" },
];

const translationsData = [
  {
    keyPath: "home.shortDescription",
    category: null,
    translations: {
      TR: "Vibe Coding . Gazi Üniversitesi  - Python - Gömülü Sistemler - Modern Web Teknolojileri.",
      EN: "Vibe Coding .Gazi University - Python - Embedded Systems - Modern Web Technologies.",
    },
  },
  {
    keyPath: "about.journeyDescription",
    category: null,
    translations: {
      TR: "Gazi Üniversitesi Gazi Eğitim Fakültesi - Python - C++, C# - (React, Next.js) - (Django, Flask) - (MySQL, MongoDB) - (Tailwind, Bootstrap) - 'Vibe Coding' .",
      EN: "Gazi University - Python - C++, C# - (React, Next.js) - (Django, Flask) - (MySQL, MongoDB) - (Tailwind, Bootstrap) - 'Vibe Coding' .",
    },
  },
  {
    keyPath: "about.interestsDescription",
    category: null,
    translations: {
      TR: "",
      EN: "",
    },
  },
];

async function seedLanguages() {
  await prisma.language.deleteMany({});
  const createdLanguages = {};
  for (const lang of languagesData) {
    try {
      const created = await prisma.language.create({
        data: lang,
      });
      createdLanguages[lang.code] = created;
    } catch (error) { }
  }
  return createdLanguages;
}

async function seedTranslations(languages) {
  await prisma.translation.deleteMany({});
  await prisma.translationKey.deleteMany({});
  for (const item of translationsData) {
    try {
      const translationKey = await prisma.translationKey.create({
        data: {
          keyPath: item.keyPath,
          category: item.category,
        },
      });
      for (const [langCode, text] of Object.entries(item.translations)) {
        const language = languages[langCode];
        if (language) {
          await prisma.translation.create({
            data: {
              keyId: translationKey.id,
              languageId: language.id,
              translationText: text,
            },
          });
        }
      }
    } catch (error) { }
  }
}

async function main() {
  try {
    const languages = await seedLanguages();
    await seedTranslations(languages);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
main();
