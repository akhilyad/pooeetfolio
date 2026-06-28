"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 md:px-12 lg:px-24 bg-slate-50/50">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase">
            Experience
          </p>
        </motion.div>

        <div className="relative mt-16 space-y-14">
          {/* Timeline line */}
          <div className="absolute left-4 top-4 bottom-4 w-px bg-slate-200 md:left-6" />

          {experience.map((job, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.12, type: "spring", stiffness: 60 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-3 h-4 w-4 rounded-full border-4 border-white bg-emerald-600 shadow-md md:left-4.5" />

              <motion.div
                whileHover={{
                  rotateY: 3,
                  rotateX: -2,
                  translateZ: 30,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {job.company}
                    </h4>
                    <p className="text-lg font-semibold text-slate-700">
                      {job.role}
                    </p>
                  </div>
                  <time className="mt-1 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 tabular-nums sm:mt-0">
                    {job.dates}
                  </time>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {job.location}
                </p>

                {/* Metric chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 border border-emerald-100"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-4">
                  {job.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex gap-3 text-base leading-relaxed text-slate-600"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}