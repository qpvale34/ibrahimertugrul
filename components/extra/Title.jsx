export default function Title({ title, subtitle, description, isVisible }) {
  return (
    <div className={`mb-4 sm:mb-12 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-2 sm:mb-4">
        <div className="h-[2px] w-8 sm:w-16 bg-[var(--bg-accent)] rounded-full opacity-50" />
        <span className="text-[var(--bg-accent)] font-semibold tracking-[0.2em] text-[10px] sm:text-xs uppercase">
          {subtitle}
        </span>
        <div className="h-[2px] w-8 sm:w-16 bg-[var(--bg-accent)] rounded-full opacity-50" />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight mb-2 sm:mb-6">
        {title}
      </h1>

      {description && (
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed px-4">
          {description}
        </p>
      )}
    </div>
  );
}

