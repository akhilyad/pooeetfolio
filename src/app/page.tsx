import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <BackToTop />
    </main>
  );
}