import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

export default function ContactInfoSection({ language }) {

    return (
        <div className="space-y-4">
            <h3 className="text-accent font-semibold text-lg border-b border-[var(--bg-accent)]/30 pb-2">
                {language === "TR" ? "İletişim Bilgileri" : "Contact Information"}
            </h3>
            <div className="space-y-3">
                <div className="flex items-start space-x-3 text-accent text-sm">
                    <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-accent" />
                    <span>İstanbul / Türkiye</span>
                    <ReactCountryFlag
                        countryCode="TR"
                        svg
                        style={{ width: "20px", height: "20px" }}
                        aria-label="Turkey"
                    />
                </div>
                <div className="flex items-start space-x-3 text-accent text-sm">
                    <FaPhone className="w-4 h-4 mt-0.5 text-accent" />
                    <span>0555 555 55 55</span>
                </div>
                <div className="flex items-start space-x-3 text-accent text-sm">
                    <FaEnvelope className="w-4 h-4 mt-0.5 text-accent" />
                    <Link
                        href={`mailto:muderrisibrahim@gmail.com`}
                        className="hover:text-accent transition-colors duration-300 break-all cursor-pointer"
                    >
                        muderrisibrahim@gmail.com
                    </Link>
                </div>
            </div>
        </div>
    );
}

