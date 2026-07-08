import { ListTodo, Palette, Repeat } from "lucide-react";
import { ProjectCard } from "./card/ProjectCard";

export type Project = {
  index: string;
  category: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string | undefined;
}
type WhatIveWorkedOnProps = {
  projects: Project[];
};

export function WhatIveWorkedOn({ projects }: WhatIveWorkedOnProps) {
  return (
    <section className="px-8 py-16 sm:px-16">
      <h2 className="font-serif text-5xl tracking-tight sm:text-6xl">
        What I&apos;ve worked on.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.index} {...project} />
        ))}
      </div>
    </section>
  );
}