"use client";

import { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hidden = {
    opacity: 0,
    filter: "blur(3px)",
    y: -5,
  };
  const visible = {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  };

  const hiddenStill = {
    opacity: 0,
    filter: "blur(3px)",
    y: 5,
  };
  const visibleStill = {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  };

  const transition = {
    duration: 0.3,
  };

  return (
    <div className={styles.page}>
      <AnimatePresence mode="wait">
        {!isMenuOpen && (
          <motion.div
            key="main"
            initial={hidden}
            animate={visible}
            exit={hidden}
            transition={transition}
            className={styles["svg-main"]}
          >
            <div className={styles["svg-header"]}>
              <picture>
                <source
                  media="(max-width: 1000px)"
                  srcSet="/assets/images/header-mobile.svg"
                ></source>
                <img
                  className={styles["svg"]}
                  src="/assets/images/header.svg"
                ></img>
              </picture>
            </div>
            <div className={styles["svg-footer"]}>
              <picture className={styles["svg"]}>
                <source
                  media="(max-width: 1000px)"
                  srcSet="/assets/images/footer-mobile.svg"
                ></source>
                <img
                  className={styles["svg"]}
                  src="/assets/images/footer.svg"
                ></img>
              </picture>
            </div>
          </motion.div>
        )}
        {isMenuOpen && (
          <motion.div
            key="menu"
            className={styles.menu}
            initial={hidden}
            animate={visible}
            exit={hidden}
            transition={transition}
          >
            <div className={styles["list-block"]}>
              <ul className={styles.list}>
                <Link className={styles["list-header"]} href="#">
                  Facebook
                </Link>
                <Link className={styles["list-header"]} href="#">
                  Instagram
                </Link>
              </ul>
            </div>
            <div className={styles["list-block"]}>
              <h2 className={styles["list-header"]}>Arhiiv/Archive</h2>
              <ul className={styles.list}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.2023.fotokuu.ee"
                >
                  2023
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.2019.fotokuu.ee"
                >
                  2019
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.2017.fotokuu.ee"
                >
                  2017
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.2015.fotokuu.ee"
                >
                  2015
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.2013.fotokuu.ee"
                >
                  2013
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.2011.fotokuu.ee"
                >
                  2011
                </Link>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className={styles.nav}>
        <button
          className={styles.btn}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <AnimatePresence mode="wait">
            {!isMenuOpen && (
              <motion.picture
                key="menu"
                initial={hiddenStill}
                animate={visibleStill}
                exit={hiddenStill}
                transition={transition}
              >
                <source
                  srcSet={`/assets/images/button-menu-mobile.svg`}
                  media="(max-width: 1000px)"
                ></source>
                <img
                  height="37.52px"
                  className={styles["btn__img"]}
                  src={`/assets/images/button-menu.svg`}
                  alt="Menu"
                ></img>
              </motion.picture>
            )}
            {isMenuOpen && (
              <motion.picture
                key="close"
                initial={hiddenStill}
                animate={visibleStill}
                exit={hiddenStill}
                transition={transition}
              >
                <source
                  srcSet={`/assets/images/button-close-mobile.svg`}
                  media="(max-width: 1000px)"
                ></source>
                <img
                  height="37.52px"
                  className={styles["btn__img"]}
                  src={`/assets/images/button-close.svg`}
                  alt="Close"
                ></img>
              </motion.picture>
            )}
          </AnimatePresence>
        </button>
      </nav>
      <div className={styles["background-wrapper"]}></div>
      <Image
        src={"/assets/images/background.jpg"}
        quality={90}
        priority
        fill
        alt="Abstract gradient background"
        aria-hidden="true"
        role="presentation"
        className={styles.background}
      />
    </div>
  );
}
