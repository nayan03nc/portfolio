import { Code2, Heart, ArrowUp } from 'lucide-react';
import { profile, socials, navLinks } from '@/data/portfolio';

export default function Footer() {
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">{profile.name}</span>
                  <span className="block text-[11px] text-cyan-400 font-mono">{profile.title}</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Java Full Stack Developer passionate about building great web experiences
                and learning new technologies.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {navLinks.slice(1).map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
                Connect
              </h4>
              <div className="flex flex-wrap gap-2.5 mb-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`group w-10 h-10 flex items-center justify-center rounded-lg glass text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${s.color}`}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        &copy; {new Date().getFullYear()} {profile.name}. Built with
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                        using React &amp; Tailwind CSS
                      </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs font-medium text-slate-400 hover:text-cyan-300 transition-all"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
