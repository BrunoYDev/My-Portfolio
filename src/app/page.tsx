"use client";

import { TypeAnimation } from "react-type-animation";
import styles from "./page.module.css";
import { ProjectModal } from "@/components/ProjectModal/ProjectModal";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Gamer's Hub API",
    description:
      "A secure Node.js/Express API for a game collection, implementing custom JWT authentication, bcrypt password hashing, and full protected CRUD operations.",
    stack: ["Node.js", "Express", "SQLite", "JWT"],
    youtubeId: "WPEYN_K-fY0",
    githubUrl: "https://github.com/BrunoYDev/GamesApi",
  },
  {
    id: 2,
    title: "Contact Agenda",
    description:
      "Full-stack project with a NestJS (Prisma, JWT, Swagger) back-end and a React (Vite, TypeScript) front-end.",
    stack: ["NestJS", "Typescript", "ReactJS", "PostgresSQL"],
    youtubeId: "VZR3f-lUJ2g",
    githubUrl: "https://github.com/BrunoYDev/Contact-Agenda",
  },
  {
    id: 3,
    title: "Y2K Personal Blog",
    description:
      "A feature-rich personal blog built as a tribute to the chaotic creativity of the early 2000s web. Content is fully managed via a Git-based CMS (Keystatic), and the site features a full-stack guestbook (Supabase), a dual visitor counter (Vercel KV), multi-level pagination, and dynamic tag archives.",
    stack: ["NextJS", "Keystatic", "Supabase", "Redis", "MDX"],
    youtubeId: "",
    githubUrl: "https://github.com/BrunoYDev/My-Blog",
    liveUrl: "https://brunorgarciablog.vercel.app",
  },
  {
    id: 4,
    title: "Current Development...",
    description: "New projects are being created...",
    stack: ["..."],
  },
];

function ScrollIndicator() {
  return (
    <div className={styles.scrollIndicator}>
      <span>SCROLL DOWN</span>
      <div className={styles.arrow}>↓</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className={styles.scrollContainer}>
      <main className={styles.main}>
        <div className={styles.terminalWindow}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalButtons}>
              <span
                className={styles.dot}
                style={{ background: "#ff5f56" }}
              ></span>
              <span
                className={styles.dot}
                style={{ background: "#ffbd2e" }}
              ></span>
              <span
                className={styles.dot}
                style={{ background: "#27c93f" }}
              ></span>
            </div>
            <div className={styles.terminalTitle}>
              C:\Users\Bruno\profile.exe
            </div>
          </div>

          <div className={styles.terminalBody}>
            <p className={styles.bootText}>Vercel BIOS v1.3.37</p>
            <p className={styles.bootText}>Initializing connection...</p>
            <p className={styles.bootText}>
              GET /api/user/bruno_garcia HTTP/1.1
            </p>
            <p className={styles.bootText}>Host: api.github.com</p>
            <p className={styles.bootText}>Status: 200 OK. Profile loaded.</p>
            <br />

            <div className={styles.typeAnimationContainer}>
              <h1>&gt;&nbsp;</h1>
              <TypeAnimation
                sequence={[
                  "Bruno Rodrigues Garcia",
                  2000,
                  "Game Developer",
                  2000,
                  "Aspiring Engine Engineer",
                  2000,
                  "Backend Developer",
                  2000,
                ]}
                wrapper="h1"
                speed={40}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </main>

      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>&gt; SELECT * FROM projects;</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <div className={styles.stack}>
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <div className={styles.cardActions}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionButton}
                  >
                    Live View
                  </a>
                )}

                {project.youtubeId && (
                  <ProjectModal
                    youtubeVideoId={project.youtubeId}
                    title={project.title}
                  />
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionButton}
                  >
                    View Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.aboutSection}>
        <Image
          src="/me.gif"
          alt="A pixelated and glitched profile picture of Bruno"
          width={150}
          height={150}
          className={styles.avatar}
          unoptimized
        />
        <div className={styles.aboutText}>
          <h2 className={styles.sectionTitle}>&gt; whoami</h2>
          <p>
            I&apos;m a developer who works on backend systems and game engines. I really care about building things the right way - clean code and solid architecture actually matter to me. You&apos;ll probably notice I mix modern tech with that Y2K vibe, and yeah, this whole site is kind of proof of that.
            <Link href="/about" className={styles.readMoreLink}>
              Read the full story...
            </Link>
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>&gt; connect_with_me</h2>
        <div className={styles.contactLinks}>
          <a
            href="https://www.linkedin.com/in/brunogarciaydev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
           <a
            href="https://ykkos2.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Itch.io
          </a>
          <a
            href="https://github.com/BrunoYDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:bruno.rogues.garcia@gmail.com">Email</a>
        </div>

        <div className={styles.cvContainer}>
          <a
            href="/bruno-garcia-cv.pdf"
            download="Bruno R Garcia - CV.pdf"
            className={styles.downloadButton}
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
