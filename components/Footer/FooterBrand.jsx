import Link from "next/link";

const rolesByLanguage = {
    TR: [
        "Vibe Coding",
        "Web Development",
        "Gömülü Sistemler",
        "Python",
        "React",
        "Node.js",
        "Next.js",
        "Tailwind CSS",

    ],
    EN: [
        "Vibe Coder",
        "Full-stack Developer",
        "Backend Expert",
    ],
};

export default function FooterBrand({ language = "EN" }) {
    const roles = rolesByLanguage[language] || rolesByLanguage.EN;

    return (
        <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block group">
                <span className="text-[30px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-tertiary)] to-[var(--bg-accent)] group-hover:scale-105 transition-transform duration-700 ease-in-out">
                    İbrahim ERTUĞRUL
                </span>
            </Link>
            <div className="text-accent text-sm leading-relaxed max-w-xs space-y-2">
                {roles.map((role, index) => (
                    <p
                        key={index}
                    >
                        <span
                            className="inline-block relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--text-tertiary)] hover:after:w-full after:transition-all after:duration-300"
                        >
                            - {role}
                        </span>
                    </p>
                ))}
            </div>
        </div>
    );
}
