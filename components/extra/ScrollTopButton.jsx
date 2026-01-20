"use client";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton({ title = "Başa Dön" }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 p-4 nm-button nm-flat text-[var(--bg-accent)] transition-all duration-300 group cursor-pointer"
            title={title}
        >
            <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
    );
}
