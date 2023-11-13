import React from "react";
import styles from "./lessons.module.scss";
import Image from "next/image";

function Lessons() {
  return (
    <div className={styles.lesson}>
      <Image src="/images/img16.jpeg" alt="image" fill />
      <div className={styles.innerContainer}>
        <h2>Learn Photography With Me</h2>
        <h3>Join my photography Lessons at Creation Conventions</h3>
        <p>and discover your talent </p>
        <a href="https://www.creationent.com/">Join!</a>
      </div>
    </div>
  );
}

export default Lessons;
