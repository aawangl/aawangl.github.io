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
    title: "Recreation Permit Tracker",
    description:
      "Periodically ping permits for availability updates / cancellations to secure permits for high-demand locations.",
    tags: ["TypeScript", "Vercel", "Supabase"],
    siteUrl: "https://recreation-tracker.vercel.app/",
    githubUrl: "https://github.com/aawangl/recreation-tracker",
  },
];
