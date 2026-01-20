"use client";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import LoadingScreen from "../../../components/extra/LoadingScreen";
import "../../styles/about.css";
import InterestsCard from "../../../components/PageComponents/About/InterestsCard";
import PersonalInfoCard from "../../../components/PageComponents/About/PersonalInfoCard";
import JourneyCard from "../../../components/PageComponents/About/JourneyCard";

export default function AboutPage() {
  const { language, t, loading } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (loading) return <LoadingScreen language={language} />;

  const getTextPreview = (text, maxSentences = 3) => {
    if (!text) return { preview: '', hasMore: false };

    const sentences = text
      .split(". ")
      .filter((sentence) => sentence.trim().length > 0);

    if (sentences.length <= maxSentences) {
      return { preview: text, hasMore: false };
    }

    const preview = sentences.slice(0, maxSentences).join(". ") + ".";
    const remaining =
      sentences.slice(maxSentences).join(". ") +
      (sentences[sentences.length - 1].endsWith(".") ? "" : ".");

    return { preview, remaining, hasMore: true };
  };

  const journeyText = getTextPreview(t('about.journeyDescription'), 3);
  const interestsText = getTextPreview(t('about.interestsDescription'), 3);

  return (
    <section id="about" className="relative mt-5 sm:mt-10 md:mt-20 min-h-screen">
      <div className="block sm:hidden h-1" />
      <div className="min-h-screen relative overflow-hidden text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-none mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <JourneyCard journeyText={journeyText} language={language} isVisible={isVisible} />
              <InterestsCard interestsText={interestsText} language={language} isVisible={isVisible} />
            </div>
            <PersonalInfoCard language={language} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}
