import Link from "next/link";
import { notFound } from "next/navigation";

import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import FadeIn from "@/components/FadeIn";
import StaggeredFadeIn from "@/components/StaggeredFadeIn";
import { getProjectBySlug, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await Promise.resolve(params);
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 glass border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Button variant="ghost" href="/" className="text-sm">
            ← Back to Portfolio
          </Button>
          <Badge variant="outline">Project Details</Badge>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl gradient-text">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-pretty text-lg leading-8 text-muted-foreground">
              {project.summary}
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <Carousel items={project.gallery} />
          </div>

          <StaggeredFadeIn>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <Card variant="glass" className="p-8">
                <div className="text-lg font-bold mb-6">Project Details</div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Role
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(project.role ?? "—")
                        .split("/")
                        .map((r) => r.trim())
                        .filter(Boolean)
                        .map((r) => (
                          <Badge key={r} variant="outline" size="sm">
                            {r}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  {project.context ? (
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                        Context
                      </div>
                      <div className="text-base leading-7 text-muted-foreground">
                        {project.context}
                      </div>
                    </div>
                  ) : null}

                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline" size="sm">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.links?.length ? (
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                        Links & Resources
                      </div>
                      <div className="space-y-3">
                        {project.links.map((l) => (
                          <Button
                            key={l.href}
                            variant="outline"
                            href={l.href}
                            target={
                              l.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              l.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="w-full justify-start"
                          >
                            {l.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </Card>

              <div className="space-y-8">
                <Card variant="glass" className="p-8">
                  <div className="text-lg font-bold mb-6">Key Highlights</div>
                  <ul className="space-y-4">
                    {project.highlights.map((h, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span className="text-base leading-7 text-muted-foreground">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {project.experienceGained?.length ? (
                  <Card variant="glass" className="p-8">
                    <div className="text-lg font-bold mb-6">
                      Experience Gained
                    </div>
                    <ul className="space-y-4">
                      {project.experienceGained.map((h, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                          <span className="text-base leading-7 text-muted-foreground">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ) : null}
              </div>
            </div>
          </StaggeredFadeIn>
        </FadeIn>
      </main>
    </div>
  );
}
