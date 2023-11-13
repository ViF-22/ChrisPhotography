import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

import styles from "./contact.module.scss";

function Contact() {
  return (
    <div className={styles.contact}>
      <h3>Find me on</h3>
      <div className={styles.sm}>
        <a href="https://www.instagram.com/chrisschmelke/">
          <AiOutlineInstagram className={styles.svgIcon} />
        </a>
        <a href="https://twitter.com/chrisschmelke">
          <AiOutlineTwitter className={styles.svgIcon} />
        </a>
        <a>
          <AiOutlineMail className={styles.svgIcon} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
