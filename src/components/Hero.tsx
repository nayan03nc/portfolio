import { ArrowDown, Sparkles, MapPin, Download } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300">Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-4">
              Hi, I&apos;m{' '}
              <span className="text-gradient inline-block">Nayan</span>
              <br />
              Chaudhari
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 mb-3">
              <span className="text-cyan-400 font-mono">&lt;</span> Java Full Stack Developer{' '}
              <span className="text-slate-500">&amp;</span> IT Engineer{' '}
              <span className="text-cyan-400 font-mono">/&gt;</span>
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mb-6 leading-relaxed mx-auto lg:mx-0">
              {profile.summary}
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-400 mb-7">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {profile.location}
            </div>

            {/* Socials */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                           {socials.map((s) => (
                             <a
                               key={s.label}
                               href={s.href}
                               target="_blank"
                               rel="noopener noreferrer"
                               aria-label={s.label}
                               className={`group w-12 h-12 flex items-center justify-center rounded-xl glass text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${s.color}`}
                             >
                               <s.icon className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                             </a>
                           ))}
                         </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                View My Work
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-cyan-300 glass rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-6 rounded-full border border-cyan-500/20 animate-spin-slow" />
              <div className="absolute -inset-3 rounded-full border border-teal-500/20" style={{ animation: 'spin-slow 8s linear infinite reverse' }} />

              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-teal-500/30 blur-2xl scale-110" />

            {/* Photo container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-cyan-500/20 animate-pulse-glow bg-slate-900 flex items-center justify-center">
             <img
               src="/nayan.jpg"
               alt="Nayan Chaudhari"
               className="w-full h-full object-cover"
               style={{ objectPosition: 'center 5%' }}
               loading="eager"
             />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:top-4 sm:right-0 px-3 py-1.5 rounded-full glass-dark text-xs font-mono font-semibold text-cyan-300 animate-float">
                &lt;/&gt;
              </div>
              <div className="absolute bottom-4 -left-4 sm:-left-8 px-3 py-1.5 rounded-full glass-dark text-xs font-semibold text-emerald-300 animate-float-slow">
                ☁ Cloud
              </div>
              <div className="absolute top-1/2 -right-6 sm:-right-10 px-3 py-1.5 rounded-full glass-dark text-xs font-semibold text-amber-300 animate-float" style={{ animationDelay: '1s' }}>
                Salesforce
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-[11px] font-mono uppercase tracking-wider">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce-slow" />
      </button>
    </section>
  );
}
