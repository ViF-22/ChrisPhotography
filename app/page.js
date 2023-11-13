"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "./data";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Hero from "./components/Hero";
import Lenis from "@studio-freight/lenis";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Lessons from "./components/Lessons";

export default function Home() {
  const plate1 = useRef(null);
  const plate2 = useRef(null);
  const plate3 = useRef(null);

  const speed = 0.01;
  let xForce = 0;
  let yForce = 0;
  let requestAnimationFrameId = null;
  const easing = 0.08;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plate1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plate2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plate3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  //lenis scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={styles.main}>
      <main
        className={styles.main_container}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
      >
        <div ref={plate1} className={styles.plate}>
          <Image
            src={img1}
            alt="image"
            width={230}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={img2}
            alt="image"
            width={230}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={img3}
            alt="image"
            width={200}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div ref={plate2} className={styles.plate}>
          <Image
            src={img4}
            alt="image"
            width={230}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={img5}
            alt="image"
            width={240}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={img8}
            alt="image"
            width={280}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div ref={plate3} className={styles.plate}>
          <Image
            src={img7}
            alt="image"
            width={240}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={img6}
            alt="image"
            width={300}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.title}>
          <h1>Chris Schmelke</h1>
          <p>photography with taste</p>
        </div>
      </main>
      <About />
      <Hero />
      {/* <Projects /> */}
      <Lessons />
      <Contact />
    </div>
  );
}
