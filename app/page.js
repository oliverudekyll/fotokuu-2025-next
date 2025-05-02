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
      <div className={styles["svg-main"]}>
        <AnimatePresence>
          <motion.div
            initial={{
              scale: 1,
            }}
            animate={{
              scale: isMenuOpen ? 0.75 : 1,
            }}
            exit={{
              scale: 1,
            }}
            transition={{ duration: 0.3 }}
            className={styles["svg-header"]}
          >
            <img
              className={styles["svg"]}
              src="/assets/images/header-title.svg"
            ></img>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {!isMenuOpen && (
            <motion.div
              key="main"
              initial={hidden}
              animate={visible}
              exit={hidden}
              transition={transition}
              className={styles["svg-container"]}
            >
              <img
                className={styles["svg"]}
                src="/assets/images/header-date.svg"
              ></img>

              <footer className={styles.footer}>
                <img
                  className={styles["svg-footer"]}
                  src="/assets/images/footer-announcement.svg"
                ></img>

                <div className={styles["links"]}>
                  <button
                    aria-label={"Open archive"}
                    onClick={() => {
                      setIsMenuOpen(true);
                    }}
                    className={styles.button}
                  >
                    Arhiiv/Archive
                  </button>
                  <ul className={styles.list}>
                    <a
                      className={styles["button"]}
                      href="https://www.facebook.com/Fotokuu/"
                    >
                      Facebook
                    </a>
                    <a
                      className={styles["button"]}
                      href="https://www.instagram.com/tallinn_photomonth/"
                    >
                      Instagram
                    </a>
                  </ul>
                </div>
              </footer>
            </motion.div>
          )}
          {isMenuOpen && (
            <motion.div
              key="menu"
              initial={hidden}
              animate={visible}
              exit={hidden}
              transition={transition}
              className={styles["menu"]}
            >
              <h2 className={styles["list-header"]}>Arhiiv/Archive</h2>
              <ul className={styles["list"]}>
                <li>
                  <a href="https://2023.fotokuu.ee">2023</a>
                </li>
                <li>
                  <a href="https://2021.fotokuu.ee">2021</a>
                </li>
                <li>
                  <a href="https://2019.fotokuu.ee">2019</a>
                </li>
                <li>
                  <a href="https://2017.fotokuu.ee">2017</a>
                </li>
                <li>
                  <a href="https://2015.fotokuu.ee">2015</a>
                </li>
                <li>
                  <a href="https://2013.fotokuu.ee">2013</a>
                </li>
                <li>
                  <a href="https://2011.fotokuu.ee">2011</a>
                </li>
              </ul>
              <button
                aria-label={"Open archive"}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className={styles["button"]}
              >
                ←
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
