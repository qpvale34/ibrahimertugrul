import Link from "next/link";

export function DesktopSocialLinks({ socialLinks, t }) {
 return (
  <div className="hidden lg:block">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 z-[0]">
    <div className="flex justify-end">
     <div className="flex items-center justify-center nm-flat space-x-3 p-3 rounded-b-2xl border-transparent">
      {socialLinks.map((link) => {
       const IconComponent = link.icon;
       return (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center px-3 py-2.5 nm-button nm-flat group relative flex items-center justify-center px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-300 min-w-[40px] border-transparent hover:scale-105"
        >
          {link.name === t.cv ? (
           <div className="flex items-center space-x-1">
            <IconComponent className="w-4 h-4 text-primary hover:text-[var(--bg-accent)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xs whitespace-nowrap text-primary hover:text-[var(--bg-accent)] font-semibold">
             {link.name}
            </span>
           </div>
          ) : (
           <IconComponent className="w-4 h-4 text-primary hover:text-[var(--bg-accent)] group-hover:scale-110 transition-transform duration-200" />
          )}
          <div className="absolute inset-0 hidden"></div>
        </Link>
       );
      })}
     </div>
    </div>
   </div>
  </div>
 );
}

