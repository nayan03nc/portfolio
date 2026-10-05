import { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Reveal } from '@/components/Reveal';
import { useSpotlight } from '@/hooks/useSpotlight';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  const [selected, setSelected] = useState<number | null>(null);
  const handleSpotlight = useSpotlight();
  const selectedCert = selected !== null ? certifications[selected] : null;

  return (
    <section id="certifications" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding">
        <SectionHeader
          icon={Award}
          label="06 — Certifications"
          title="Certifications & Achievements"
          subtitle="A visual grid of my verified credentials — hover to explore, click to expand"
        />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Badge grid — spans 2 columns on desktop */}
          <Reveal stagger className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {certifications.map((cert, i) => (
                <button
                  key={cert.title}
                  onMouseMove={handleSpotlight}
                  onMouseEnter={() => setSelected(i)}
                  onMouseLeave={() => setSelected(null)}
                  onClick={() => setSelected(selected === i ? null : i)}
                  className={`card-modern card-spotlight group p-4 sm:p-5 text-left transition-all duration-400 ${
                    selected === i
                      ? 'border-cyan-400/40 bg-cyan-500/5 -translate-y-2 shadow-2xl shadow-cyan-500/15'
                      : cert.highlight
                        ? 'bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border-violet-500/20'
                        : ''
                  }`}
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />

                  {/* Icon badge */}
                  <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-3 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <cert.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    {cert.highlight && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-violet-500 border-2 border-slate-950 flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-white" />
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-snug mb-1 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-[11px] text-slate-400 font-mono truncate">
                    {cert.issuer}
                  </p>

                  {/* Verified tick — appears on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Detail panel */}
          <Reveal>
            <div className="sticky top-20">
              <div
                onMouseMove={handleSpotlight}
                className="card-modern card-spotlight group p-6 min-h-[280px] flex flex-col"
              >
                {selectedCert ? (
                  <>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedCert.color} flex items-center justify-center mb-5 shadow-xl`}>
                      <selectedCert.icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Verified Credential</span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug mb-3">
                      {selectedCert.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-sm text-slate-400 mb-6">
                      <span>Issued by</span>
                      <span className="font-semibold text-cyan-300">{selectedCert.issuer}</span>
                    </div>

                    <div className="mt-auto space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono">Credential active</span>
                      </div>
                      <div className={`h-1 rounded-full bg-gradient-to-r ${selectedCert.color} opacity-80`} />
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center flex-1 py-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-slate-600" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-500 mb-2">
                      Hover or tap a badge
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                      Explore my certifications by hovering over any badge in the grid to see details here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
