import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saiyam</h1>
        <p className={styles.description}>
          {" "}
          Hello and welcome! I am full-stack developer, A passionate and driven
          software engineering student with a keen interest in crafting
          innovative solutions to complex problems. This portfolio serves as a
          showcase of my journey, projects, and skills as I continue to evolve
          in the dynamic field of software engineering.
        </p>
        <a
          href="mailto:saiyam.babbar.5@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero2.avif")}
        alt="Hero"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
