// src/app/about/page.tsx
import Link from "next/link";
import styles from "./about.module.css";
import Image from "next/image";
import { TypingParagraph } from "@/components/TyphingParagraph/TyphingParagraph";
import { TypingLinkParagraph } from "@/components/TypingLinkParagraph/TypingLinkParagraph";

export default function AboutPage() {
  const finalParagraphText =
    "For more on my personal philosophy and the inspiration behind my blog's Y2K design, you can access the archive here.";

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.homeButton}>
        &gt; cd ..
      </Link>

      <h1
        className={styles.mainTitle}
        style={{ "--index": 1 } as React.CSSProperties}
      >
        &gt; run whoami.sh
      </h1>

      <section
        className={styles.section}
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <Image
          src="/me.gif"
          alt="A pixelated and glitched profile picture of Bruno"
          width={100}
          height={100}
          className={styles.avatar}
          unoptimized
          style={{ "--index": 0, marginLeft: "10px" } as React.CSSProperties}
        />
        <h2 className={styles.sectionTitle}>[ STATUS ]</h2>
        <TypingParagraph text="Computer Science Student & Developer exploring the logic behind everything. While I build scalable backend systems professionally, my passion extends to Game Development with Godot, where I craft digital worlds. Constantly refactoring my skills to become an Engine Engineer." />
      </section>

      <section
        className={styles.section}
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <h2 className={styles.sectionTitle}>[ CORE_PHILOSOPHY ]</h2>
        <TypingParagraph text="Whether it's a REST API or a kinematic character controller, I am driven by the architecture behind the scenes. I believe that styling is temporary, but robust logic is eternal. My goal is to master the engines that make things run, prioritizing performance, clean code, and system integrity." />
      </section>

      <section
        className={styles.section}
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className={styles.sectionTitle}>[ SKILLSET_MATRIX ]</h2>
        <div className={styles.skillsGrid}>
          <div style={{ "--index": 5 } as React.CSSProperties}>
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>TypeScript</li>
              <li>C#</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div style={{ "--index": 6 } as React.CSSProperties}>
            <h3>Game Dev & Art</h3>
            <ul>
              <li>Godot Engine</li>
              <li>GDScript</li>
              <li>Aseprite</li>
              <li>Blender</li>
              <li>Pixel Art</li>
              <li>System Design</li>
            </ul>
          </div>
          <div style={{ "--index": 7 } as React.CSSProperties}>
            <h3>Backend</h3>
            <ul>
              <li>Spring Boot</li>
              <li>Node.js</li>
              <li>Nest.js</li>
              <li>Express</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div style={{ "--index": 8 } as React.CSSProperties}>
            <h3>Databases & Tools</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>MySQL</li>
              <li>Redis</li>
              <li>Supabase</li>
              <li>Git & Github</li>
              <li>Docker</li>
              <li>Vercel</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        style={{ "--index": 10 } as React.CSSProperties}
      >
        <h2 className={styles.sectionTitle}>[ LOGS & MUSINGS ]</h2>
        <TypingLinkParagraph fullText={finalParagraphText}>
          For more on my personal philosophy and the inspiration behind my
          blog&apos;s Y2K design, you can{" "}
          <Link
            href="https://brunorgarciablog.vercel.app/about"
            target="_blank"
            className={styles.externalLink}
          >
            access the archive here
          </Link>
          .
        </TypingLinkParagraph>
      </section>
    </main>
  );
}
