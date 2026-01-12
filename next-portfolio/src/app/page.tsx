import Image from "next/image";
import Link from "next/link";

import FadeIn from "@/components/FadeIn";
import ThemeToggle from "@/components/ThemeToggle";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Bereket Alemayehu
          </a>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 text-sm text-foreground/70 sm:flex">
              <a className="hover:text-foreground" href="#about">
                About
              </a>
              <a className="hover:text-foreground" href="#skills">
                Skills
              </a>
              <a className="hover:text-foreground" href="#experience">
                Experience
              </a>
              <a className="hover:text-foreground" href="#projects">
                Projects
              </a>
              <a className="hover:text-foreground" href="#contact">
                Contact
              </a>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5 py-12">
        <section className="grid items-center gap-10 sm:grid-cols-2">
          <FadeIn>
            <div>
              <p className="text-sm font-medium text-foreground/70">
                Software Engineering student — Bahir Dar University (GC)
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Mobile & Backend Developer, DHIS2 Specialist
              </h1>

              <div className="mt-4 flex flex-col gap-2">
                {[
                  "Mobile Developer",
                  "Backend Developer",
                  "DHIS2 Developer",
                ].map((r) => (
                  <span
                    key={r}
                    className="w-fit rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <p className="mt-4 max-w-prose text-pretty text-base leading-7 text-foreground/70">
                I build real-world health and business systems: Flutter mobile
                apps (GetX & Riverpod), backend development (Laravel, Node.js),
                and DHIS2 implementations (mobile + web). CGPA: 3.93.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
                  href="#projects"
                >
                  View projects
                </a>
                <a
                  className="rounded-lg border border-foreground/10 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
                  href="#contact"
                >
                  Contact
                </a>
                <a
                  className="rounded-lg border border-foreground/10 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
                  href="https://github.com/bereket-alemayehu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-lg border border-foreground/10 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
                  href="https://www.linkedin.com/in/melonaafomi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
              <Image
                src="/image.jpg"
                alt="Portrait photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </section>

        <section id="about" className="mt-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div className="text-sm leading-7 text-foreground/70">
                <p>
                  I’m a Software Engineering student at Bahir Dar University
                  with strong hands-on experience in Flutter mobile development
                  and backend systems.
                </p>
                <p className="mt-3">
                  Recently, I worked as a Mobile Application Developer at
                  Habtech, contributing to CBHI (Community-Based Health
                  Insurance) systems for the Ethiopian Health Insurance program.
                </p>
                <p className="mt-3">
                  I also worked extensively with DHIS2 for Sidama and Somali
                  regions, including Ethiopian Calendar integration and
                  dashboard design for monitoring and decision-making.
                </p>
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
                <Image
                  src="/image2.jpg"
                  alt="Second portrait photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="skills" className="mt-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Mobile",
                  items: ["Flutter", "Dart", "GetX", "Riverpod"],
                },
                {
                  title: "Backend",
                  items: ["Laravel", "Node.js", "Express", "REST APIs"],
                },
                {
                  title: "DHIS2",
                  items: ["Dashboards", "Programs & Indicators", "Workflows"],
                },
                {
                  title: "Foundations",
                  items: [
                    "Data Structures & Algorithms",
                    "Database Systems",
                    "Software Engineering",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-foreground/10 p-5"
                >
                  <div className="text-sm font-semibold">{card.title}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {card.items.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section id="experience" className="mt-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">
              Experience
            </h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-foreground/10 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-sm font-semibold">
                    Habtech — Mobile Application Developer
                  </div>
                  <div className="text-sm text-foreground/60">
                    Until Dec 2025
                  </div>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/70">
                  <li>
                    Contributed to CBHI systems for the Ethiopian Health
                    Insurance program.
                  </li>
                  <li>
                    Built Flutter features using GetX; gained strong experience
                    with GetX and Riverpod patterns.
                  </li>
                  <li>
                    Learned strong professional discipline: delivering on time,
                    within scope, and with clear team communication.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-foreground/10 p-5">
                <div className="text-sm font-semibold">
                  DHIS2 — Specialist / Developer
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/70">
                  <li>
                    Supported DHIS2 implementations for Sidama and Somali
                    regions (mobile + web).
                  </li>
                  <li>
                    Integrated Ethiopian Calendar into DHIS2 with a teammate,
                    improving local usability and adoption.
                  </li>
                  <li>
                    Designed dashboards for tracking programs and indicators to
                    support monitoring and decision-making.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-foreground/10 p-5">
                <div className="text-sm font-semibold">
                  Helder Technologies — Laravel Backend Developer
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/70">
                  <li>
                    Built backend systems in Laravel, using Filament and
                    Livewire 3 for dashboards.
                  </li>
                  <li>
                    Collaborated closely with frontend developers; focused on
                    performance, security, and maintainability.
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="projects" className="mt-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 text-sm text-black/70">
              Select a project to open a dedicated page. Projects with multiple
              images show a carousel.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group rounded-2xl border border-foreground/10 p-5 hover:bg-foreground/5"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5">
                    <Image
                      src={p.cover.src}
                      alt={p.cover.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-semibold">{p.title}</div>
                    <div className="mt-2 text-sm leading-6 text-foreground/70">
                      {p.summary}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="mt-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
            <div className="mt-6 rounded-2xl border border-foreground/10 p-5">
              <div className="text-sm font-semibold">
                Bahir Dar University — Software Engineering (GC)
              </div>
              <div className="mt-2 text-sm text-foreground/70">CGPA: 3.93</div>
              <div className="mt-4 text-sm font-semibold">Courses</div>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                Data Structures & Algorithms, Database Systems, Software
                Engineering, Mobile & Web Development, Distributed Systems, Big
                Data, Cloud Computing, AI & Machine Learning, Compiler Design,
                Real-Time & Embedded Systems, C++ I & II.
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="mt-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">
              Certificates & Documents
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  label: "DHIS2 Online Academy Certificate (GEN-D001)",
                  href: "/assets/HISP%20GEN-D001-en%20Certificate%20_%20DHIS2%20Online%20Academy.pdf",
                },
                {
                  label: "DHIS2 Online Academy Certificate (GEN-D002)",
                  href: "/assets/hisp%20GEN-D002-en%20Certificate%20_%20DHIS2%20Online%20Academy.pdf",
                },
                {
                  label: "Letter of Recommendation",
                  href: "/assets/_Letter%20of%20Recommendation%20for%20Bereket%20Alemayhu.pdf",
                },
                {
                  label: "Udacity Certification",
                  href: "/assets/udacity_certification.pdf",
                },
              ].map((doc) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  className="rounded-2xl border border-foreground/10 p-5 text-sm font-medium hover:bg-foreground/5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doc.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </section>

        <section id="contact" className="mt-16 pb-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <div className="mt-6 rounded-2xl border border-foreground/10 p-5">
              <div className="text-sm leading-7 text-foreground/70">
                For collaborations, internships, and freelance work:
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
                  href="mailto:bereketalemayehu@gmail.com"
                >
                  Email
                </a>
                <a
                  className="rounded-lg border border-foreground/10 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
                  href="https://github.com/bereket-alemayehu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-lg border border-foreground/10 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
                  href="https://www.linkedin.com/in/melonaafomi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="mt-4 text-xs text-foreground/60">
                Update the email/phone in this section if needed.
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}
