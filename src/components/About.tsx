import { User, Code2, Cloud, Zap, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Reveal } from '@/components/Reveal';
import { useSpotlight } from '@/hooks/useSpotlight';
import { profile } from '@/data/portfolio';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building web apps with Java, Spring Boot, Hibernate, JSP & JDBC.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & Salesforce',
    description: 'Hands-on with Google Cloud, Apex, Process Automation & API Integration.',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Problem Solver',
    description: 'Strong analytical mindset with quick learning and adaptability.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learner',
    description: 'Active on Trailhead, LeetCode, and Google Cloud Skills Boost.',
    color: 'from-rose-500 to-pink-500',
  },
];

export default function About() {
  const handleSpotlight = useSpotlight();

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding">
        <SectionHeader
          icon={User}
          label="01 — About"
          title="About Me"
          subtitle="Get to know the developer behind the code"
        />

        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {profile.summary}
            </p>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {highlights.map((h) => (
              <div
                key={h.title}
                onMouseMove={handleSpotlight}
                className="card-modern card-spotlight group p-6 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center mb-4 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <h.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{h.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{h.description}</p>
                <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${h.color} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
