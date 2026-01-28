import { motion } from "framer-motion";

const Website = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-sky-400 to-emerald-300 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_-16px_rgba(56,189,248,0.8)]">
              AJ
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">Avery Johnson</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                CS Essentials Portfolio
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.3em] text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#resume">
              Resume
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:border-sky-400 hover:text-sky-200"
            href="#contact"
          >
            Let&apos;s connect
          </a>
        </div>
      </header>

      <main>
        <motion.section
          className="relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.div
            className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[160px]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full bg-indigo-500/25 blur-[140px]"
            animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div className="space-y-8" variants={fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
                Computer Science Essentials
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                A sleek, dark-mode portfolio that lets the work glow.
              </h1>
              <p className="text-lg text-slate-300">
                I&apos;m Avery Johnson, a high school computer science student focused on building
                thoughtful, accessible software. This site highlights my story, resume, and two
                featured projects from CS Essentials.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 shadow-[0_18px_50px_-24px_rgba(56,189,248,0.9)] transition hover:from-indigo-400 hover:via-sky-400 hover:to-emerald-300"
                  href="#projects"
                >
                  View projects
                </a>
                <a
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 transition hover:border-indigo-400 hover:text-white"
                  href="#resume"
                >
                  Resume
                </a>
              </div>
              <div className="flex flex-wrap gap-8 text-sm text-slate-400">
                <div>
                  <p className="text-2xl font-semibold text-white">3.9</p>
                  <p>GPA</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">2</p>
                  <p>Featured projects</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">5</p>
                  <p>Tech stack tools</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_40px_120px_-60px_rgba(14,116,144,0.35)] backdrop-blur"
              variants={fadeUp}
            >
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Focus areas
                  </p>
                  <div className="mt-4 grid gap-3 text-sm text-slate-300">
                    {[
                      "Human-centered design",
                      "Clean UI + UX systems",
                      "Creative coding",
                      "Team collaboration",
                    ].map((item) => (
                      <div key={item} className="flex items-center justify-between">
                        <span>{item}</span>
                        <span className="text-xs text-slate-400">●</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Now
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">Exploring Swift & React</p>
                  <p className="mt-3 text-sm text-slate-400">
                    Building polished interfaces with smooth motion and a focus on accessibility.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="mx-auto w-full max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">About</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Designing with intention, building with clarity.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                I&apos;m a student developer who loves the intersection of design and engineering. My CS
                Essentials coursework pushed me to think critically about user needs, iterate quickly,
                and ship projects that feel polished.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Outside of class, I enjoy sketching interfaces, learning Swift, and collaborating on
                hackathon teams. I&apos;m looking for opportunities to grow in software engineering and
                product design.
              </p>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6"
              variants={fadeUp}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Highlights
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-center justify-between">
                  <span>AP Computer Science Essentials</span>
                  <span className="text-slate-400">2024</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>UI/UX Club Lead</span>
                  <span className="text-slate-400">2 years</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Volunteer tutor</span>
                  <span className="text-slate-400">150+ hrs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="resume"
          className="border-y border-slate-800 bg-slate-950/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <motion.div variants={fadeUp}>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                  Resume
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Coursework, leadership, and technical focus.
                </h2>
                <p className="mt-4 text-sm text-slate-300">
                  I combine technical fundamentals with design thinking. Here is a snapshot of my
                  coursework, leadership, and tools.
                </p>
              </motion.div>
              <motion.div className="grid gap-4" variants={stagger}>
                {[
                  {
                    title: "Education",
                    description: "Riverstone High School · Class of 2025 · GPA 3.9",
                  },
                  {
                    title: "Coursework",
                    description: "CS Essentials, AP Calculus AB, Digital Media Studio",
                  },
                  {
                    title: "Technical skills",
                    description: "JavaScript, TypeScript, React, Swift, Figma",
                  },
                  {
                    title: "Leadership",
                    description: "UI/UX Club Lead, Robotics Team Mentor",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_20px_60px_-45px_rgba(59,130,246,0.4)]"
                    variants={fadeUp}
                  >
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mx-auto w-full max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" variants={fadeUp}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                Projects
              </p>
              <h2 className="text-3xl font-semibold text-white">Featured CS Essentials work.</h2>
            </div>
            <p className="max-w-md text-sm text-slate-300">
              Two standout projects that demonstrate research, iteration, and final presentation
              quality.
            </p>
          </motion.div>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={stagger}>
            {[
              {
                title: "StudyFlow Planner",
                description:
                  "A productivity web app that helps students plan study sessions with smart reminders and a visual timeline.",
                stack: "React · TypeScript · Tailwind",
                outcome: "Improved planning accuracy by 30% in user testing.",
              },
              {
                title: "EcoTrack Mobile",
                description:
                  "Prototype mobile app for tracking personal sustainability goals with daily prompts and analytics.",
                stack: "SwiftUI · Firebase · Figma",
                outcome: "Presented at the district STEM showcase.",
              },
            ].map((project) => (
              <motion.article
                key={project.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_30px_90px_-60px_rgba(56,189,248,0.35)] backdrop-blur"
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 30px 120px -70px rgba(56, 189, 248, 0.55)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {project.stack}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                <p className="mt-4 text-sm font-semibold text-slate-100">{project.outcome}</p>
                <button className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 transition hover:text-sky-300">
                  View case study →
                </button>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="mx-auto w-full max-w-6xl px-6 pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.div
            className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-[0_40px_120px_-70px_rgba(59,130,246,0.35)]"
            variants={fadeUp}
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Let&apos;s build something meaningful.
                </h2>
                <p className="mt-4 text-sm text-slate-300">
                  Reach out for internships, mentorship, or collaboration opportunities. I&apos;ll reply
                  within two days.
                </p>
              </div>
              <motion.div className="space-y-4 text-sm text-slate-300" variants={stagger}>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Email
                  </p>
                  <p className="mt-2 text-base text-white">avery.johnson@email.com</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Location
                  </p>
                  <p className="mt-2 text-base text-white">Seattle, WA · Open to remote</p>
                </div>
                <button className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:from-indigo-400 hover:via-sky-400 hover:to-emerald-300">
                  Download resume PDF
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-xs uppercase tracking-[0.3em] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2024 Avery Johnson. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
