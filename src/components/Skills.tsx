import { Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Reveal } from '@/components/Reveal';
import { useSpotlight } from '@/hooks/useSpotlight';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  const handleSpotlight = useSpotlight();

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding">
        <SectionHeader
          icon={Layers}
          label="02 — Skills"
          title="Technical Skills"
          subtitle="Technologies and tools I work with across the full stack"
        />

        <Reveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                onMouseMove={handleSpotlight}
                className="card-modern card-spotlight group p-6 hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <category.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-4 leading-snug">
                  {category.title}
                </h3>

                {/* Skills as sleek interactive badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      <span className="skill-dot" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Extra card for visual balance — Tech Stack summary */}
            <div
              onMouseMove={handleSpotlight}
              className="card-modern card-spotlight group p-6 flex flex-col justify-center items-center text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-5xl font-extrabold text-gradient mb-2">20+</div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Technologies across languages, frameworks, databases, cloud &amp; networking
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
