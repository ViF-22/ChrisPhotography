import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function About() {
  const left = useRef(null);
  const portrait = useRef(null);
  let refsText = useRef([]); // for each letter

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
    textAnimation();
  }, []);

  const createAnimations = () => {
    gsap.set(portrait.current, {
      yPercent: -20,
      opacity: 0,
    });
    gsap.set(refsText.current, {
      yPercent: -20,
      opacity: 0,
    });

    gsap.to(portrait.current, {
      scrollTrigger: {
        trigger: left.current,
        start: "top",
        end: "top+=40%",

        scrub: true,
      },
      opacity: 1,
      yPercent: 0,

      ease: "none",
    });
  };

  const textAnimation = () => {
    gsap.set(refsText.current, {
      scrollTrigger: {
        trigger: left.current,
        start: "top",
        end: "top+=30%",
        scrub: true,
      },
      yPercent: 0,
      opacity: 1,
      stagger: 0.5,
    });
  };

  return (
    <div className={styles.about} ref={left}>
      <div className={styles.left}>
        <Image src="/images/portrait.jpg" alt="portrait" fill ref={portrait} />
      </div>
      <div className={styles.right}>
        <h3>About me</h3>
        <h2>Hi, I'm Chris!</h2>
        <p>I'm a photographer specializing in:</p>
        <div className={styles.specializing}>
          <p className={styles.special} ref={(el) => refsText.current.push(el)}>
            Conventions
          </p>
          <p className={styles.special} ref={(el) => refsText.current.push(el)}>
            Concerts
          </p>
          <p className={styles.special} ref={(el) => refsText.current.push(el)}>
            Portraits
          </p>
          <p className={styles.special} ref={(el) => refsText.current.push(el)}>
            Weddings
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
