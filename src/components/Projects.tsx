import { useState } from 'react';
import { Code2, ChevronDown, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Reveal } from '@/components/Reveal';
import { useSpotlight } from '@/hooks/useSpotlight';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const handleSpotlight = useSpotlight();

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding">
        <SectionHeader
          icon={Code2}
          label="04 — Projects"
          title="Featured Projects"
          subtitle="Things I've built that showcase my skills and passion"
        />

        <Reveal stagger>
          <div className="max-w-5xl mx-auto space-y-6">
            {projects.map((project, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <div
                  key={project.title}
                  onMouseMove={handleSpotlight}
                  className="card-modern card-spotlight group hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-48 md:h-full min-h-[220px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent md:bg-gradient-to-r" />
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg glass-dark">
                        <Layers className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-xs font-mono text-slate-300">{project.techStack}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="skill-badge !px-2.5 !py-1 !text-[11px]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Expandable features */}
                      <div className="mt-auto">
                        <button
                          onClick={() => setExpandedIndex(isExpanded ? null : i)}
                          className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>{isExpanded ? 'Hide Features' : 'View Features'}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-500 ${
                            isExpanded
                              ? 'grid-rows-[1fr] opacity-100 mt-4'
                              : 'grid-rows-[0fr] opacity-0 mt-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="space-y-3 pt-1">
                              {project.features.map((feature) => (
                                <div
                                  key={feature.name}
                                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-semibold text-white">{feature.name}</p>
                                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent transition-all duration-500 rounded-bl-full" />
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* More projects hint */}
        <Reveal>
          <div className="text-center mt-10">
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              <ArrowUpRight className="w-4 h-4" />
              More projects coming soon — always building and learning
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
