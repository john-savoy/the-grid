import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projectsData";
import Link from "next/link";

export default function ProjectsSection() {
  // Show only first 2 projects on home page
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-cyan tracking-wider mb-4">
            ━ FEATURED PROGRAMS ━
          </h2>
          <p className="font-body text-ice-light text-lg">
            Solutions built across the Grid
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tagline={project.tagline}
              image={project.image}
              userContent={project.userContent}
              techContent={project.techContent}
              challengeContent={project.challengeContent}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border-2 border-cyan bg-transparent text-cyan font-display text-sm tracking-wider hover:bg-cyan/10 hover:shadow-glow-cyan-md transition-all duration-300"
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>
      </div>
    </section>
  );
}