import { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useScrollReveal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-padding h-16 sm:h-18 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 opacity-0 group-hover:opacity-40 blur-md transition-opacity" />
            </div>
            <div className="hidden sm:block text-left">
              <span className="block text-sm font-bold text-white leading-tight">
                Nayan Chaudhari
              </span>
              <span className="block text-[11px] text-cyan-400 font-mono leading-tight">
                Portfolio
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.slice(1).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-cyan-300'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="group relative hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-cyan-200 glass rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              <span className="hidden md:inline">Resume</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              Let&apos;s Talk
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg glass text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 p-6 pt-20 transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="space-y-1.5">
            {navLinks.slice(1).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => handleNavClick('contact')}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl shadow-lg shadow-cyan-500/25"
          >
            Let&apos;s Talk
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-cyan-200 glass rounded-xl"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
