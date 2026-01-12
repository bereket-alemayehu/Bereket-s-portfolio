import Link from "next/link";
import { notFound } from "next/navigation";

import Carousel from "@/components/Carousel";
import FadeIn from "@/components/FadeIn";
import { getProjectBySlug } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-sm font-medium hover:underline">
            ← Back
          </Link>
          <div className="text-sm text-foreground/60">Project</div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10">
        <FadeIn>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-pretty text-base leading-7 text-foreground/70">
            {project.summary}
          </p>

          <div className="mt-8 flex justify-center">
            <Carousel items={project.gallery} />
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                Role
              </div>

              <div className="mt-2 flex flex-col gap-2">
                {(project.role ?? "—")
                  .split("/")
                  .map((r) => r.trim())
                  .filter(Boolean)
                  .map((r) => (
                    <span
                      key={r}
                      className="w-fit rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs"
                    >
                      {r}
                    </span>
                  ))}
              </div>

              {project.context ? (
                <div className="mt-4 text-sm text-foreground/70">
                  {project.context}
                </div>
              ) : null}

              <div className="mt-6 text-xs font-semibold uppercase tracking-wide text-foreground/50">
                Tech
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.links?.length ? (
                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                    Links
                  </div>
                  <ul className="mt-2 space-y-2">
                    {project.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          className="text-sm underline underline-offset-4"
                          target={
                            l.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            l.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                Highlights
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/80">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {project.experienceGained?.length ? (
                <div className="mt-8">
                  <div className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                    Experience Gained
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/80">
                    {project.experienceGained.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
