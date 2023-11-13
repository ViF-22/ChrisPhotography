import React, { useEffect } from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import useDimension from "../useDimension";

const images = [
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpeg",
  "img15.jpeg",
  "img16.jpeg",
  "img17.jpeg",
];

function Hero() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], //start anim at the top of the cont and the bottom of the window (when it enters the window), and stop at the bottom of the cont and the top of the window (when it leaves the vw)
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {}, []);

  return (
    <div className={styles.hero}>
      <div className={styles.spacer}></div>
      <div ref={container} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[2], images[3], images[5]]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
}

export default Hero;

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={`/images/${src}`} fill alt="image" />
          </div>
        );
      })}
    </motion.div>
  );
};
