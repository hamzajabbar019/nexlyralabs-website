import { navLinks } from '../data/agencyData';
import { siteConfig } from '../config/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#040811] py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#131F38]">
          <div className="space-y-1.5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-lg font-semibold tracking-tight text-white hover:text-blue-400 transition-colors"
            >
              {siteConfig.companyName}
            </a>
            <p className="text-sm text-blue-400 font-medium">{siteConfig.tagline}</p>
            <p className="text-xs text-slate-400">
              Founded by {siteConfig.founderName} · {siteConfig.location} · {siteConfig.serving}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
          <p>Founder-Led Software Engineering Agency</p>
        </div>
      </div>
    </footer>
  );
}
