import Link from "next/link";

export function Logo({ isHovered, setIsHovered }) {
  return (
    <Link
      href="/"
      className="flex items-center justify-center px-6 py-3 rounded-full nm-flat hover:nm-inset transition-all duration-300 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r from-[var(--text-tertiary)]/20 via-[var(--bg-accent)]/20 to-[var(--text-tertiary)]/20 rounded-lg transition-all duration-800 ${isHovered ? "opacity-100 blur-sm scale-110" : "opacity-0 scale-100"
          }`} />

        <div className="relative min-w-max">
          <div
            className={`transition-all duration-800 opacity-100 scale-100`}
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-[var(--text-tertiary)] via-[var(--bg-accent)] to-[var(--text-tertiary)] bg-clip-text text-transparent leading-tight tracking-[0.1em] font-[Garamond]">
              İE
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
