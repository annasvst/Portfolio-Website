import React from "react";
import "./about.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className="about">
      <motion.div className="textContainer">
        <p>
          Dreams
          <br /> Woven in Code
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer">
        <div className="title">
          <h1>
            <b>Saffet</b> Ramazan Kaban
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Frontend</b> Developer
          </h1>
          <button>WHAT SAFFET DOES?</button>
        </div>
      </motion.div>

      <motion.div className="aboutTextContainer">
        <div className="aboutText">
          <h2>In short</h2>
          <br />
          <p>
            I discovered my passion for software development during my
            university years, initially focusing on machine learning and image
            processing. This led me to embark on a fulfilling career as a
            software developer at Softtech.
          </p>
          <p>
            Beginning with low-code platforms, I concurrently delved into
            frontend development. Within Softtech, I honed my skills in data
            visualization using Power BI. During my free time, I immersed myself
            in technologies such as HTML, CSS, Javascript, React, and various
            libraries like Bootstrap, jQuery, and Tailwind, while actively
            participating in freelance projects. Yet, what I value most is not
            just technical proficiency but the ongoing journey of learning and
            problem-solving.
          </p>
          <p>
            My experiences underscore the significance of adaptability and
            resilience in navigating challenges. Beyond technical abilities, I
            bring a commitment to effective communication, teamwork, and a
            user-centric approach to design.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
