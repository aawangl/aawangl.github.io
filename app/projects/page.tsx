import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { EmptyState } from "@/components/EmptyState";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16 sm:py-24">
      <h1 className="font-serif text-3xl tracking-tight">Projects</h1>
      <RevealOnScroll>
        {projects.length > 0 ? (
          <div className="flex flex-col">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState title="Projects coming soon" />
        )}
      </RevealOnScroll>
    </div>
  );
}
