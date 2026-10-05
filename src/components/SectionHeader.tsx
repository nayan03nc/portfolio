import type { LucideIcon } from 'lucide-react';

export default function SectionHeader({
  icon: Icon,
  label,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
        <Icon className="w-4 h-4 text-cyan-400" />
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{label}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-5 flex items-center justify-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-cyan-400" />
        <span className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
        <span className="h-1 w-1 rounded-full bg-teal-400" />
      </div>
    </div>
  );
}
