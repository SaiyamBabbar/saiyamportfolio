import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          <a href="mailto:saiyam.babbar.5@gmail.com">
            saiyam.babbar.5@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin" />
          <a href="https://www.linkedin.com/in/saiyam-babbar-a32ab4136/">
            linkedin.com/SaiyamBabbar
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
          <a href="https://github.com/SaiyamBabbar">github.com/SaiyamBabbar</a>
        </li>
      </ul>
    </footer>
  );
};
