import "./styles/globals.css";
import { Suspense } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { DataProvider } from "./context/DataContext";
import { ThemeProvider } from "./context/ThemeContext";
import LayoutContent from "./LayoutContent.jsx";
import ScrollToTop from "../components/extra/ScrollToTop";

export const metadata = {
    title: "İbrahim Ertuğrul ",
    description: "İngilizce - Modern web teknolojileri - Geliştirme kartları.",
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: '/apple-touch-icon.png',
    },
};

function LoadingFallback() {
    return null;
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body>
                <ThemeProvider>
                    <LanguageProvider>
                        <DataProvider>
                            <Suspense fallback={<LoadingFallback />}>
                                <LayoutContent>
                                    <ScrollToTop />
                                    {children}
                                </LayoutContent>
                            </Suspense>
                        </DataProvider>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}