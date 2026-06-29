"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "MBA in Engineering Management",
    institution: "Technical University of Berlin (TU Berlin)",
    location: "Berlin, Germany",
    dates: "2024 – 2026",
    highlights: ["Operations Strategy", "Supply Chain Optimization", "Project Finance", "Digital Transformation"],
    glowColor: "blue" as const,
  },
  {
    degree: "M.Tech in Control Systems",
    institution: "Indian Institute of Technology (IIT)",
    location: "India",
    dates: "2018 – 2020",
    highlights: ["Model Predictive Control", "Process Automation", "System Identification", "Nonlinear Dynamics"],
    glowColor: "purple" as const,
  },
  {
    degree: "B.Tech in Electrical Engineering",
    institution: "National Institute of Technology (NIT)",
    location: "India",
    dates: "2014 – 2018",
    highlights: ["Power Electronics", "Control Theory", "Signal Processing", "Instrumentation"],
    glowColor: "green" as const,
  },
];

export function Education() {
  return (
    <section id="education" className="py-14 sm:py-16 md:py-24 px-6 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-10 md:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Education</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-violet-500" />
      </motion.div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="min-w-0 flex justify-center md:justify-start"
          >
            <GlowCard
              glowColor={edu.glowColor}
              customSize
              className="h-full w-full max-w-[340px] sm:max-w-none !p-5 sm:!p-6 !gap-3 sm:!gap-4 !rounded-2xl !shadow-none hover:!shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="h-5 w-5 text-slate-400" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Education</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                  {edu.degree}
                </h3>
                
                <p className="text-sm font-medium text-slate-700 mb-3">
                  {edu.institution}
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {edu.dates}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {edu.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-md bg-slate-100/80 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium text-slate-600 border border-slate-200/60"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}