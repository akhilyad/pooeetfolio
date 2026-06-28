"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:px-12 lg:px-24 bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase">
            Key Projects
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
          {projects.map((project, index) => {
            const CardWrapper = project.url ? motion.a : motion.div;
            const wrapperProps = project.url
              ? {
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={index}
                {...wrapperProps}
                initial={{ opacity: 0, y: 30, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 60 }}
                whileHover={{
                  rotateY: 6,
                  rotateX: -4,
                  translateZ: 50,
                  scale: 1.03,
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.1)",
                }}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors"
                style={{ transformStyle: "preserve-3d", cursor: project.url ? "pointer" : "default" }}
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                    {project.name}
                  </h4>
                  {project.url && (
                    <ExternalLink className="h-5 w-5 text-slate-400 transition-colors group-hover:text-emerald-600" />
                  )}
                </div>
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}