"use client";
import React, { useState } from "react";
import styles from "./projects.module.scss";
import Image from "next/image";
import { img4, img7, img15, img17 } from "../concerts";
import { img13, img14, img5, img1 } from "../portraits";
import { useRef, useEffect } from "react";
import { img2, img18, img12 } from "../conventions";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [concert, setConcert] = useState(true);
  const [convention, setConvention] = useState(false);
  const [portrait, setPortrait] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className={styles.projects} ref={triggerRef}>
      <h3>Projects</h3>
      <div className={styles.varAndPics}>
        <div className={styles.variants}>
          <a
            onClick={() => {
              setConvention(false);
              setPortrait(false);
              setConcert(true);
            }}
          >
            Concerts
          </a>
          <a
            onClick={() => {
              setPortrait(false);
              setConcert(false);
              setConvention(true);
            }}
          >
            Conventions
          </a>
          <a
            onClick={() => {
              setConvention(false);

              setConcert(false);
              setPortrait(true);
            }}
          >
            Portraits
          </a>
        </div>
        {concert && (
          <div className={styles.concerts} ref={sectionRef}>
            <Image src={img17} alt="pic concert" width={360} />
            <Image src={img7} alt="pic concert" width={360} />
            <Image src={img4} alt="pic concert" width={560} />
            <Image src={img15} alt="pic concert" width={760} />
          </div>
        )}
        {convention && (
          <div className={styles.concerts} ref={sectionRef}>
            <Image src={img17} alt="pic concert" width={360} />
            <Image src={img7} alt="pic concert" width={360} />
            <Image src={img12} alt="pic concert" width={560} />
            <Image src={img2} alt="pic concert" width={760} />
          </div>
        )}
        {portrait && (
          <div className={styles.concerts} ref={sectionRef}>
            <Image src={img1} alt="pic concert" width={360} />
            <Image src={img14} alt="pic concert" width={360} />
            <Image src={img13} alt="pic concert" width={560} />
            <Image src={img5} alt="pic concert" width={760} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
