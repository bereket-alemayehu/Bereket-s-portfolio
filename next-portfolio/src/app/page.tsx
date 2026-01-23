import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";
import FloatingElement from "@/components/FloatingElement";
import StaggeredFadeIn from "@/components/StaggeredFadeIn";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Smartphone,
  Zap,
  BarChart3,
  Building2,
  Trophy,
  FileText,
  GraduationCap,
  Github,
  Linkedin,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground snow-bg">
      <header className="sticky top-0 z-10 glass border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link
            href="#top"
            className="text-sm font-semibold tracking-tight gradient-text"
          >
            Bereket Alemayehu
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
              <a
                className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-primary after:to-primary/80 after:transition-all hover:after:w-full"
                href="#about"
              >
                About
              </a>
              <a
                className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-primary after:to-primary/80 after:transition-all hover:after:w-full"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-primary after:to-primary/80 after:transition-all hover:after:w-full"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-primary after:to-primary/80 after:transition-all hover:after:w-full"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-primary after:to-primary/80 after:transition-all hover:after:w-full"
                href="#contact"
              >
                Contact
              </a>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <main
        id="top"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
      >
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement
            delay={0}
            className="absolute top-20 left-4 sm:left-10"
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary/20 rounded-full blur-sm" />
          </FloatingElement>
          <FloatingElement
            delay={1}
            className="absolute top-32 sm:top-40 right-4 sm:right-20"
          >
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-secondary/15 rounded-lg rotate-45" />
          </FloatingElement>
          <FloatingElement
            delay={2}
            className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20"
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent/25 rounded-full" />
          </FloatingElement>
          <FloatingElement
            delay={0.5}
            className="absolute top-48 sm:top-60 right-4 sm:right-10"
          >
            <div className="w-3 h-3 sm:w-5 sm:h-5 bg-primary/10 rounded-lg" />
          </FloatingElement>
        </div>

        <section className="relative grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
          <FadeIn>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Software Engineering
              </p>

              <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="gradient-text">Mobile & Backend</span>
                <br />
                Developer
              </h1>
              <p className="mt-3 text-base sm:text-lg font-medium text-muted-foreground">
                DHIS2 Developer (Mobile + Web)
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Flutter", "Laravel / Node.js", "DHIS2"].map((t) => (
                  <Badge key={t} variant="gradient">
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="mt-6 max-w-prose text-pretty text-lg leading-8 text-muted-foreground">
                I architect and deliver real-world systems for health and
                business sectors: crafting Flutter applications, robust backend
                APIs, and comprehensive DHIS2 implementations that prioritize
                exceptional usability, rock-solid stability, and reliable
                delivery.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button
                  variant="gradient"
                  size="lg"
                  href="#projects"
                  className="w-full sm:w-auto"
                >
                  Explore Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="#contact"
                  className="w-full sm:w-auto"
                >
                  Get In Touch
                </Button>
                <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    size="lg"
                    href="https://github.com/bereket-alemayehu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    href="https://www.linkedin.com/in/melonaafomi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-3xl border border-border/50 bg-card shadow-2xl">
              <Image
                src="/image1.png"
                alt="Portrait photo"
                fill
                className="object-cover object-[center_20%] scale-[1.08] transition-transform duration-700 hover:scale-[1.12]"
                priority
              />
            </div>
          </FadeIn>
        </section>

        <section id="about" className="mt-32">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight gradient-text">
              About
            </h2>
            <div className="mt-8 grid gap-12 sm:grid-cols-2">
              <Card className="p-8">
                <div className="text-base leading-8 text-muted-foreground">
                  <p>
                    I am a dedicated Software Engineering student at Bahir Dar
                    University, equipped with extensive hands-on experience in
                    Flutter mobile development and sophisticated backend system
                    architecture.
                  </p>
                  <p className="mt-4">
                    Most recently, I served as a Mobile Application Developer at
                    Habtech, where I contributed significantly to CBHI
                    (Community-Based Health Insurance) systems powering the
                    Ethiopian Health Insurance program.
                  </p>
                  <p className="mt-4">
                    Additionally, I have extensive experience working with DHIS2
                    across Sidama and Somali regions, including pioneering
                    Ethiopian Calendar integration and designing comprehensive
                    dashboards for advanced health monitoring and strategic
                    decision-making.
                  </p>
                </div>
              </Card>

              <div className="relative">
                <Card className="overflow-hidden p-0">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/image2.png"
                      alt="Second portrait photo"
                      fill
                      className="object-cover object-[center_20%] transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </FadeIn>
        </section>

        <section
          id="skills"
          className="mt-32 rounded-3xl bg-muted/20 p-6 sm:p-10"
        >
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight gradient-text">
              Skills
            </h2>
            <StaggeredFadeIn>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Mobile Development",
                    items: ["Flutter", "Dart", "GetX", "Riverpod"],
                    icon: Smartphone,
                  },
                  {
                    title: "Backend Development",
                    items: ["Laravel", "Node.js", "Express", "REST APIs"],
                    icon: Zap,
                  },
                  {
                    title: "DHIS2 Expertise",
                    items: ["Dashboards", "Programs & Indicators", "Workflows"],
                    icon: BarChart3,
                  },
                  {
                    title: "Technical Foundations",
                    items: [
                      "Data Structures & Algorithms",
                      "Database Systems",
                      "Software Engineering",
                    ],
                    icon: Building2,
                  },
                ].map((card) => (
                  <Card key={card.title} className="p-6">
                    <div className="flex items-center gap-3">
                      <card.icon className="w-6 h-6 text-primary" />
                      <div className="text-lg font-semibold">{card.title}</div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {card.items.map((t) => (
                        <Badge key={t} variant="outline" size="sm">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </StaggeredFadeIn>
          </FadeIn>
        </section>

        <section id="experience" className="mt-32">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight gradient-text">
              Experience
            </h2>
            <StaggeredFadeIn>
              <div className="mt-8 space-y-8">
                <Card variant="glass" className="p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
                    <div className="text-xl font-bold">
                      Habtech — Mobile Application Developer
                    </div>
                    <Badge variant="outline">Until Dec 2025</Badge>
                  </div>
                  <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      Pioneered CBHI systems development for the Ethiopian
                      Health Insurance program, delivering critical
                      infrastructure for nationwide healthcare access.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      Architected Flutter applications using advanced GetX
                      patterns and Riverpod state management for scalable,
                      maintainable mobile solutions.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      Mastered professional development discipline, consistently
                      delivering high-quality solutions within timeframes and
                      budget constraints.
                    </li>
                  </ul>
                </Card>

                <Card variant="glass" className="p-8">
                  <div className="text-xl font-bold mb-6">
                    DHIS2 — Developer
                  </div>
                  <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      Led DHIS2 implementations across Sidama and Somali
                      regions, ensuring seamless mobile and web functionality
                      for health monitoring systems.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      Collaborated on Ethiopian Calendar integration,
                      dramatically enhancing local usability and cultural
                      relevance for health professionals.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      Designed sophisticated dashboards with advanced data
                      visualization, enabling data-driven decision-making for
                      health stakeholders.
                    </li>
                  </ul>
                </Card>

                <Card variant="glass" className="p-8">
                  <div className="text-xl font-bold mb-6">
                    Helder Technologies — Laravel Backend Developer
                  </div>
                  <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      Engineered robust backend architectures using Laravel with
                      Filament and Livewire 3, creating powerful admin
                      dashboards for client management.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      Established seamless collaboration workflows with frontend
                      teams, ensuring end-to-end feature delivery and system
                      integration.
                    </li>
                  </ul>
                </Card>
              </div>
            </StaggeredFadeIn>
          </FadeIn>
        </section>

        <section
          id="projects"
          className="mt-32 rounded-3xl bg-muted/20 p-6 sm:p-10"
        >
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight gradient-text">
              Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore my portfolio of innovative solutions. Each project
              showcases unique technical challenges and creative problem-solving
              approaches. Click any project to discover detailed implementation
              insights and outcomes.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {projects.length} projects
            </p>

            {projects.length === 0 && (
              <div className="text-red-500 text-xl font-bold mt-4">
                NO PROJECTS FOUND! Projects array is empty.
              </div>
            )}

            <StaggeredFadeIn>
              <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
                {projects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="block"
                  >
                    <Card variant="gradient" className="p-6 group">
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-card shadow-lg mb-4">
                        <Image
                          src={p.cover.src}
                          alt={p.cover.alt}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 600px"
                        />
                      </div>

                      <div className="text-lg sm:text-xl font-bold tracking-tight mb-2">
                        {p.title}
                      </div>
                      {p.role ? (
                        <div className="mb-3">
                          <Badge variant="outline" size="sm">
                            {p.role}
                          </Badge>
                        </div>
                      ) : null}
                      <div className="text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground line-clamp-3 mb-4">
                        {p.summary}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.slice(0, 3).map((t) => (
                          <Badge key={t} variant="outline" size="sm">
                            {t}
                          </Badge>
                        ))}
                        {p.tech.length > 3 && (
                          <Badge variant="outline" size="sm">
                            +{p.tech.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </StaggeredFadeIn>
          </FadeIn>
        </section>

        <section className="mt-32 rounded-3xl bg-muted/20 p-6 sm:p-10">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight gradient-text">
              Education
            </h2>
            <Card variant="glass" className="mt-8 p-8">
              <div className="text-xl font-bold">
                Bahir Dar University — Software Engineering (GC)
              </div>
              <div className="mt-3">
                <Badge variant="gradient">CGPA: 3.93</Badge>
              </div>
              <div className="mt-6 text-lg font-semibold">
                Key Courses Completed
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Data Structures & Algorithms",
                  "Database Systems",
                  "Software Engineering",
                  "Mobile & Web Development",
                  "Distributed Systems",
                  "Big Data",
                  "Cloud Computing",
                  "AI & Machine Learning",
                  "Compiler Design",
                  "Real-Time & Embedded Systems",
                  "C++ I & II",
                ].map((course) => (
                  <Badge key={course} variant="default">
                    {course}
                  </Badge>
                ))}
              </div>
            </Card>
          </FadeIn>
        </section>

        <section className="mt-32 rounded-3xl bg-accent/10 p-6 sm:p-10">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight gradient-text">
              Certificates & Documents
            </h2>
            <StaggeredFadeIn>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    label: "DHIS2 Online Academy Certificate (GEN-D001)",
                    href: "/assets/HISP%20GEN-D001-en%20Certificate%20_%20DHIS2%20Online%20Academy.pdf",
                    icon: Trophy,
                  },
                  {
                    label: "DHIS2 Online Academy Certificate (GEN-D002)",
                    href: "/assets/hisp%20GEN-D002-en%20Certificate%20_%20DHIS2%20Online%20Academy.pdf",
                    icon: Trophy,
                  },
                  {
                    label: "Letter of Recommendation",
                    href: "/assets/_Letter%20of%20Recommendation%20for%20Bereket%20Alemayhu.pdf",
                    icon: FileText,
                  },
                  {
                    label: "Udacity Certification",
                    href: "/assets/udacity_certification.pdf",
                    icon: GraduationCap,
                  },
                ].map((doc) => (
                  <Card key={doc.href} variant="glass" className="p-6">
                    <a
                      href={doc.href}
                      className="group flex items-center gap-4 transition-transform hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <doc.icon className="w-8 h-8 text-primary" />
                      <div className="text-base font-semibold group-hover:text-primary transition-colors">
                        {doc.label}
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </StaggeredFadeIn>
          </FadeIn>
        </section>

        <section id="contact" className="mt-32 pb-20">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight gradient-text">
              Contact
            </h2>
            <Card variant="glass" className="mt-8 p-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <div className="text-xl font-bold mb-4">
                    Let&apos;s Build Something Amazing
                  </div>
                  <p className="text-base leading-7 text-muted-foreground mb-6">
                    I&apos;m always excited to collaborate on innovative
                    projects, whether it&apos;s mobile development, backend
                    systems, or DHIS2 implementations. Let&apos;s discuss how we
                    can bring your vision to life with cutting-edge technology
                    and exceptional user experiences.
                  </p>
                  <Button
                    variant="gradient"
                    size="lg"
                    href="mailto:bereketalemayehu@gmail.com"
                    className="mb-6"
                  >
                    bereketalemayehu@gmail.com
                  </Button>
                </div>

                <div>
                  <div className="text-xl font-bold mb-6">Connect With Me</div>
                  <div className="flex flex-col gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      href="https://github.com/bereket-alemayehu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="justify-start"
                    >
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Profile
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      href="https://www.linkedin.com/in/melonaafomi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="justify-start"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}
