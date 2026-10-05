import { TrendingUp } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useSpotlight } from '@/hooks/useSpotlight';
import { Reveal } from '@/components/Reveal';
import { stats } from '@/data/portfolio';

function formatValue(value: number, decimals: number) {
  if (decimals > 0) return value.toFixed(decimals);
  if (value >= 1000) return value.toLocaleString('en-US');
  return String(value);
}

function StatCard({
  stat,
  delay,
}: {
  stat: (typeof stats)[number];
  delay: number;
}) {
  const { ref, value } = useCountUp(stat.value, 2200, stat.decimals);
  const handleSpotlight = useSpotlight();

  return (
    <div
      ref={ref}
      onMouseMove={handleSpotlight}
      style={{ transitionDelay: `${delay}ms` }}
      className="card-modern card-spotlight group p-6 text-center hover:shadow-2xl hover:shadow-black/30"
    >
      {/* Top accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Icon */}
      <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
        <stat.icon className="w-6 h-6 text-white" strokeWidth={2} />
      </div>

      {/* Value */}
      <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums tracking-tight">
        <span className="text-gradient">{formatValue(value, stat.decimals)}</span>
        <span className="text-slate-400 text-lg sm:text-xl font-bold">{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className="text-xs font-mono uppercase tracking-wider text-slate-400">{stat.label}</div>

      {/* Bottom trend indicator */}
      <div className="mt-3 flex items-center justify-center gap-1 text-[10px] text-emerald-400/70 opacity-0 group-hover:opacity-100 transition-opacity">
        <TrendingUp className="w-3 h-3" />
        <span className="font-mono uppercase tracking-wide">Achieved</span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-14 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {/* Glow strip behind stats */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-r from-cyan-500/5 via-teal-500/8 to-emerald-500/5 blur-3xl" />

      <div className="relative z-10 section-padding">
        <Reveal stagger>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={i * 100} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
