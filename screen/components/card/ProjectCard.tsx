import { Button, buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type ProjectCardProps = {
  index: string;
  category: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
};

export function ProjectCard({
  index,
  category,
  title,
  description,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="flex h-101 flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium tracking-widest text-neutral-400">
          {index}
        </span>
        <span className="h-px w-6 bg-neutral-300" />
        <span className="text-xs font-medium tracking-widest text-neutral-400">
          {category.toUpperCase()}
        </span>
      </div>

      <h3 className="mt-4 line-clamp-2 min-h-19 text-3xl font-bold leading-tight tracking-tight text-neutral-900">
        {title}
      </h3>

      <p className="mt-4 line-clamp-6 text-base leading-relaxed text-neutral-600">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-3 pt-3">
        {githubUrl &&
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              className: "w-36 justify-center",
            })}
          >
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </a>
        }

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              className: "w-36 justify-center",
            })}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}