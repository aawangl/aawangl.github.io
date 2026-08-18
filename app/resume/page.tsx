import { resume } from "@/content/resume";
import { LinkButton } from "@/components/LinkButton";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16 sm:py-24">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="font-serif text-3xl tracking-tight">
            {resume.name}
          </h1>
          <p className="mt-1 text-muted">
            {resume.title} · {resume.location}
          </p>
        </div>
        <LinkButton href="/andrew_wang_resume.pdf" download>
          Download PDF
        </LinkButton>
      </div>

      <RevealOnScroll className="flex flex-col gap-12">
        <section>
          <p className="max-w-2xl text-muted">{resume.summary}</p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-serif text-xl">Experience</h2>
          <div className="flex flex-col gap-6">
            {resume.experience.map((job) => (
              <div key={`${job.company}-${job.role}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium">
                    {job.role} · {job.company}
                  </h3>
                  <span className="text-sm text-muted">{job.period}</span>
                </div>
                <ul className="mt-2 list-disc pl-5 text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-xl">Education</h2>
          {resume.education.map((edu) => (
            <div
              key={edu.school}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <h3 className="font-medium">
                {edu.degree} · {edu.school}
              </h3>
              <span className="text-sm text-muted">{edu.period}</span>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl">Skills</h2>
          <ul className="flex flex-wrap gap-2 text-sm text-muted">
            {resume.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border px-3 py-1"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </RevealOnScroll>
    </div>
  );
}
