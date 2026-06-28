"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, FileText, MapPin, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-20 sm:px-6 md:px-12 lg:px-24">
      {/* Ambient depth orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 h-[700px] w-[700px] rounded-full bg-emerald-100/50 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-slate-200/60 blur-3xl"
        />
      </div>

      <div className="mx-auto w-full max-w-5xl" style={{ perspective: 1200 }}>
        <motion.div
          initial={{ opacity: 0, rotateX: 15, translateZ: -80, y: 50 }}
          animate={{ opacity: 1, rotateX: 0, translateZ: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-800 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            {personalInfo.available}
          </motion.div>

          <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 md:text-7xl lg:text-8xl leading-[0.95]">
            {personalInfo.name}
          </h1>

          <h2 className="mt-6 font-semibold text-slate-700 whitespace-nowrap text-[clamp(9px,2.4vw,28px)] tracking-tight">
            {personalInfo.title}
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 max-w-3xl space-y-3"
          >
            {personalInfo.summary
              .split(/\. (?=[A-Z])/)
              .filter(Boolean)
              .map((sentence, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-slate-600 hyphens-none md:text-xl"
                >
                  {sentence.trim()}
                  {!sentence.endsWith(".") ? "." : ""}
                </p>
              ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 60 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.06, y: -3, boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.35)" }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition-colors hover:bg-emerald-800"
          >
            <Mail className="h-4 w-4" />
            Contact
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06, y: -3, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.08)" }}
            whileTap={{ scale: 0.97 }}
            href="/Akhil_Yadav_ABB_ProjectLeadEngineer.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <FileText className="h-4 w-4" />
            View Résumé
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06, y: -3, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.08)" }}
            whileTap={{ scale: 0.97 }}
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex items-center gap-2 text-sm text-slate-500"
        >
          <MapPin className="h-4 w-4" />
          <span>{personalInfo.location}</span>
          <span className="mx-2">·</span>
          <span>{personalInfo.email}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-300 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="h-2 w-full rounded-full bg-slate-400"
          />
        </div>
      </motion.div>
    </section>
  );
}