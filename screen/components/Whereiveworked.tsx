import { ReactNode } from "react";
import { ExperienceCard } from "./card/ExperienceCard";

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: ReactNode;
};

type WhereIveWorkedProps = {
  experiences: Experience[];
};

export function WhereIveWorked({ experiences }: WhereIveWorkedProps) {
  return (
    <section className="px-8 py-16 sm:px-16">
      <h2 className="font-serif text-5xl tracking-tight sm:text-6xl">
        Where I&apos;ve worked.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.role}`}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
}