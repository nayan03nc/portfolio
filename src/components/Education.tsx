import { GraduationCap, Calendar, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Reveal } from '@/components/Reveal';
import { useSpotlight } from '@/hooks/useSpotlight';
import { education } from '@/data/portfolio';

export default function Education() {
  const handleSpotlight = useSpotlight();
  return (
    <section id="education" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding">
        <SectionHeader
          icon={GraduationCap}
          label="05 — Education"
          title="Education"
          subtitle="My academic background and achievements"
        />

        <Reveal stagger>
          <div className="max-w-4xl mx-auto space-y-5">
            {education.map((edu, i) => (
              <div
                key={edu.institution}
                onMouseMove={handleSpotlight}
                className="card-modern card-spotlight group flex flex-col sm:flex-row gap-5 sm:gap-6 p-5 sm:p-6 hover:shadow-xl hover:shadow-violet-500/10"
              >
                {/* Year badge */}
                <div className="flex sm:flex-col items-center sm:justify-center gap-2 sm:gap-1 sm:w-28 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-violet-300" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400 sm:mt-2">
                    <Calendar className="w-3 h-3" />
                    <span className="text-center">{edu.period}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">{edu.degree}</p>

                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20">
                      <Award className="w-3.5 h-3.5 text-violet-300" />
                      <span className="text-sm font-bold text-violet-200">{edu.grade}</span>
                      <span className="text-xs text-slate-400">{edu.gradeLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Index number */}
                <div className="absolute top-4 right-5 text-5xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
