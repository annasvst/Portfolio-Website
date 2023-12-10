import React from "react";
import "./hero.scss";
import {motion} from "framer-motion"

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity:1,
		transition:{
			duration: 1,
			staggerChildren: 0.1, 
		}
	},
	scrollAnimation: {
		opacity: 0,
		y: 10,
		transition:{
			duration: 2,
			repeat: Infinity,
		}
	}
}

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate:{
		x: "-100%",
		transition:{
			repeat: Infinity,
			duration: 10,
			repeatType: "mirror",
		}
	}
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Saffet Ramazan Kaban</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer and Frontend Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the latest works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollAnimation" src="/scroll.png" alt="" />
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Software Engineer and Frontend Developer
      </motion.div>

      <div className="imageContainer">
        {/* <img src="/hero.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
