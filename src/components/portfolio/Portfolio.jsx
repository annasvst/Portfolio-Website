import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project1",
    img: "https://images.pexels.com/photos/19257502/pexels-photo-19257502/free-photo-of-children-on-a-swing-on-the-edge-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo reiciendis, quisquam soluta voluptate consectetur. Nostrum enim fugiat in nemo hic accusamus vel quod, architecto repellat repudiandae assumenda quisquam illum.",
  },
  {
    id: 2,
    title: "Project2",
    img: "https://images.pexels.com/photos/19257502/pexels-photo-19257502/free-photo-of-children-on-a-swing-on-the-edge-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo reiciendis, quisquam soluta voluptate consectetur. Nostrum enim fugiat in nemo hic accusamus vel quod, architecto repellat repudiandae assumenda quisquam illum.",
  },
  {
    id: 3,
    title: "Project3",
    img: "https://images.pexels.com/photos/19257502/pexels-photo-19257502/free-photo-of-children-on-a-swing-on-the-edge-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo reiciendis, quisquam soluta voluptate consectetur. Nostrum enim fugiat in nemo hic accusamus vel quod, architecto repellat repudiandae assumenda quisquam illum.",
  },
];

const EachProject = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset:["start start", "end end"] });

  const y = useTransform(scrollYProgress, [0, 1], [-600, 600]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={project.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{y:y}}>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {projects.map((project) => (
        <EachProject project={project} key={project} />
      ))}
    </div>
  );
};

export default Portfolio;
