import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}