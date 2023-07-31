"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Blender Render" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to{" "}
        <span className="font-extrabold text-white">Blender Render</span> - a
        captivating personal project website that unveils a world of stunning 3D
        renders brought to life through the artistry of Blender! As you delve
        into this{" "}
        <span className="font-extrabold text-white">
          immersive virtual gallery
        </span>
        , prepare to be mesmerized by a diverse collection of masterfully
        crafted renders that showcase the boundless possibilities of digital
        art. Each render serves as a testament to the artist's dedication,
        skill, and passion for pushing the boundaries of creativity within the
        realm of 3D rendering. From fantastical landscapes that transport you to
        otherworldly realms, to meticulously detailed character studies that
        breathe life into the virtual canvas, Blender Render is an{" "}
        <span className="font-extrabold text-white">exploration</span> of
        imagination and technical finesse.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
