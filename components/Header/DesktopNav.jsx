import Link from "next/link";

export function DesktopNav({ navigationItems, activeSection }) {
    return (
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.key;

                return (
                    <Link
                        key={item.key}
                        href={item.href}
                        className={`relative flex items-center space-x-2 px-6 py-3 rounded-full text-[17px] xl:text-[18px] font-medium transition-all duration-300 nm-flat hover:nm-inset hover:scale-105 group ${isActive ? "text-[var(--bg-accent)] nm-inset" : "text-[var(--text-primary)] hover:text-[var(--bg-accent)]"}`}
                    >
                        <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        <span>{item.name}</span>
                    </Link>
                );
            })}
        </div>
    );
}
