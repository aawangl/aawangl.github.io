export type Project = {
  title: string;
  description: string;
  tags?: string[];
  siteUrl?: string;
  githubUrl?: string;
};

// Replace with your real projects.
export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and why you built it.",
    tags: ["TypeScript", "React"],
    siteUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "A short description of what this project does and why you built it.",
    tags: ["Python"],
    githubUrl: "https://github.com/yourusername/project-two",
  },
];
