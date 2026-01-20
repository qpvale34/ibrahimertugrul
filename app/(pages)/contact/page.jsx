"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactInfoCard from "../../../components/PageComponents/Contact/ContactInfoCard";
import SocialLinksCard from "../../../components/PageComponents/Contact/SocialLinksCard";


export default function ContactPage() {
  const { language, t, loading: langLoading } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const title = language === "EN" ? "Contact" : "İletişim";
  const subtitle = language === "EN" ? "Get in Touch" : "İletişime Geçin";
  const description = language === "EN"
    ? ""
    : "";

  return (
    <section id="contact" className="relative mt-5 sm:mt-10 md:mt-20 min-h-screen">
      <div className="block sm:hidden h-1" />
      <div className="min-h-screen relative overflow-hidden text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 pb-24 mb-10">
            <ContactInfoCard
              language={language}
              isVisible={isVisible}
            />

            <SocialLinksCard
              language={language}
              isVisible={isVisible}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
