import Image from "next/image";
import OutlinedText from "@/components/OutlinedText/OutlinedText";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles["svg-main"]}>
        <div className={styles["svg-header"]}>
          <picture>
            <source
              media="(max-width: 1000px)"
              srcSet="/assets/images/header-mobile.svg"
            ></source>
            <img src="/assets/images/header.svg"></img>
          </picture>
        </div>
        <div className={styles["svg-footer"]}>
          <picture>
            <source
              media="(max-width: 1000px)"
              srcSet="/assets/images/footer-mobile.svg"
            ></source>
            <img src="/assets/images/footer.svg"></img>
          </picture>
        </div>
      </div>
      <div className={styles["background-wrapper"]}></div>
      <Image
        src={"/assets/images/background-desktop.jpg"}
        quality={90}
        priority
        fill
        alt="Abstract gradient background"
        aria-hidden="true"
        role="presentation"
        className={styles.background}
      />
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles["title-container"]}>
            <hgroup className={styles.hgroup} lang="et">
              <h1 className={styles.title}>Tallinna Fotokuu</h1>
              <h2 className={styles.subtitle}>Kaasaegse kunsti biennaal</h2>
            </hgroup>
            <hgroup className={styles.hgroup} lang="en">
              <h1 className={styles.title}>Tallinn Photomonth</h1>
              <h2 className={styles.subtitle}>Contemporary art biennial</h2>
            </hgroup>
          </div>
          <time className={styles.date} dateTime="2025-09-05/2025-10-31">
            05.09.–31.10.2025
          </time>
        </header>

        <footer className={styles.footer}>
          <p lang="et">Rohkem infot juunis 2025</p>
          <p lang="en">More info in June 2025</p>
        </footer>
      </main>
    </div>
  );
}
