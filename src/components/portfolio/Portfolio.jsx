import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring } from "framer-motion"

const projects = [
    {
        id:1,
        title: "Project1",
        img: "https://images.pexels.com/photos/19257502/pexels-photo-19257502/free-photo-of-children-on-a-swing-on-the-edge-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo reiciendis, quisquam soluta voluptate consectetur. Nostrum enim fugiat in nemo hic accusamus vel quod, architecto repellat repudiandae assumenda quisquam illum."
    },
    {
        id:2,
        title: "Project2",
        img: "https://images.pexels.com/photos/19257502/pexels-photo-19257502/free-photo-of-children-on-a-swing-on-the-edge-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo reiciendis, quisquam soluta voluptate consectetur. Nostrum enim fugiat in nemo hic accusamus vel quod, architecto repellat repudiandae assumenda quisquam illum."
    },
    {
        id:3,
        title: "Project3",
        img: "https://images.pexels.com/photos/19257502/pexels-photo-19257502/free-photo-of-children-on-a-swing-on-the-edge-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo reiciendis, quisquam soluta voluptate consectetur. Nostrum enim fugiat in nemo hic accusamus vel quod, architecto repellat repudiandae assumenda quisquam illum."
    }
]

const EachProject = ({project}) => {
    return(
        <section>
            {project.title}
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping: 30,
    })

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div scaleX={{scaleX: scaleX}} className="progressBar"></motion.div>
        </div>
        {projects.map(project => (
            <EachProject project={project} key={project}/>
        ))}
    </div>
    
  )
}

export default Portfolio