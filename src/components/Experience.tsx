import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Reveal } from '@/components/Reveal';
import { useSpotlight } from '@/hooks/useSpotlight';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  const handleSpotlight = useSpotlight();
  return (
    <section id="experience" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding">
        <SectionHeader
          icon={Briefcase}
          label="03 — Experience"
          title="Work Experience"
          subtitle="My professional journey and internships"
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/40 via-teal-500/30 to-transparent sm:-translate-x-1/2" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <Reveal key={exp.role}>
                  <div
                    className={`relative flex flex-col sm:flex-row gap-6 sm:gap-0 ${
                      i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 ring-4 ring-slate-950 shadow-lg shadow-cyan-500/50" />
                    </div>

                    {/* Spacer for desktop alternating layout */}
                    <div className="hidden sm:block sm:w-1/2" />

                    {/* Content card */}
                    <div className={`pl-12 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                      <div
                        onMouseMove={handleSpotlight}
                        className="card-modern card-spotlight group p-5 sm:p-6 hover:shadow-xl hover:shadow-cyan-500/10"
                      >
                        {/* Image */}
                        <div className="relative h-32 rounded-xl overflow-hidden mb-4 ring-1 ring-white/10">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                          <div className="absolute bottom-2 left-3 flex items-center gap-1.5 text-xs text-slate-300">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            {exp.period}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-1.5 text-sm text-cyan-400 font-medium mb-3">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.company}
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10 rounded-md hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
