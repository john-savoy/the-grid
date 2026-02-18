import BootSequence from "@/components/hero/BootSequence";
import AboutPreview from "@/components/hero/AboutPreview";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactCTA from "@/components/contact/ContactCTA";

export default function Home() {
  return (
    <main className="pt-16">
      <BootSequence />
      <AboutPreview />
      <ProjectsSection />
      <ContactCTA />
    </main>
  );
}