import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 border-b border-border py-6 first:pt-0 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="font-serif text-xl">{project.title}</h2>
        <div className="flex gap-4 text-sm">
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              Site ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
      <p className="text-muted">{project.description}</p>
      {project.tags && project.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 text-xs text-muted">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
