type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: React.ReactNode;
};

export function ExperienceCard({
  company,
  role,
  period,
  location,
  description,
}: ExperienceCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-neutral-900">{company}</h3>
      <p className="mt-0.5 text-base text-neutral-500">{role}</p>

      <div className="mt-3 space-y-0.5">
        <p className="text-xs font-medium tracking-widest text-neutral-400">
          {period.toUpperCase()}
        </p>
        <p className="text-xs font-medium tracking-widest text-neutral-400">
          {location.toUpperCase()}
        </p>
      </div>

      <div className="mt-4 border-t border-neutral-200 pt-4 text-base leading-relaxed text-neutral-600">
        {description}
      </div>
    </div>
  );
}