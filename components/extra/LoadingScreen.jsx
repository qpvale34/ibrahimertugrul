"use client";
import { useLanguage } from "../../app/context/LanguageContext";

export default function LoadingScreen({ language }) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
        <p className="text-primary">
          {language === "EN" ? "Loading..." : "Yükleniyor..."}
        </p>
      </div>
    </div>
  );
}